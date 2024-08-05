import { saveBrouchure } from "../utils/saveBroucher.js";
import { emailTransport, hmtlBody , __dirname} from "../utils.js";
import path from "path";
import { pool } from "../database/db.js";
const broucherService ={}

broucherService.sendEmail= async (file,subject)=>{
    const fileUrl = path.join(__dirname, `../public/brochures/${file.originalname}`);
    const fileUrl2 = path.join(__dirname, '../public/brochures/vanity.png');
    try {
        await saveBrouchure(file);
        const {rows:employees } = await pool.query('SELECT *FROM empleados');
        
        for (const employee of employees) {
            const { primer_nombre: firstName, apellido_paterno:lastName ,email } = employee;
            const info = await  emailTransport.sendMail({
                from: "herberthmeca@gmail.com",
                to: email,
                subject: subject,
                html: hmtlBody(subject,firstName,lastName),
                attachments:[
                    {
                    filename:'boardingPassQ865GS_MEXMTY_MCFBRFQ-.jpg',
                    path:fileUrl,
                    cid:'it',
                    },
                    {
                    filename:'vanity.webp',
                    path:fileUrl2,
                    cid:'vanity',
                    }
                ]
                
                })
        }
        
        return { success: true, message: 'Email sent successfully' };
}
catch (error) {
    return { success: false, message: 'Failed to send email', eror };
}
        
    
}  

export default broucherService