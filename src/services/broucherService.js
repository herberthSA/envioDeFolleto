import { saveBrouchure } from "../utils/saveBroucher.js";
import { emailTransport, hmtlBody , __dirname} from "../utils.js";
import path from "path";
const broucherService ={}

broucherService.sendEmail= async (file,subject)=>{
    try {
        await saveBrouchure(file);
        const fileUrl = path.join(__dirname, `../public/brochures/${file.originalname}`);
        const fileUrl2 = path.join(__dirname, '../public/brochures/vanity.png');
        console.log('file: ',fileUrl);
        const info = await  emailTransport.sendMail({
        from: "herberthmeca@gmail.com",
        to: ["herberthmeca@gmail.com","herberth.mancia@outlook.com"],
        subject: "hello world",
        html: hmtlBody(subject) ,
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
        console.log(info.response);
        return { success: true, message: 'Email sent successfully' };
}
catch (error) {
    return { success: false, message: 'Failed to send email', eror };
}
        
    
}  

export default broucherService