import fs from 'node:fs';

export const saveBrouchure = (file)=>{

    const newPath =  `public/brochures/${file.originalname}`;
    //console.log(newPath)
    fs.renameSync(file.path,newPath);
    return newPath
}