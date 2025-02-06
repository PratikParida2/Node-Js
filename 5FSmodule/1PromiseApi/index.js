import * as fs from "fs/promises";


// //Create A Directory
// try
// {
//     await fs.mkdir("d:\\nodejs");
//     console.log("File Is Crated Successfully");
// }catch(err)
// {
//     console.log(err);
// }

//Read In Directory
// try
// {

//     const file=await fs.readdir("d:\\nodejs");
//     //For Iterative Over Object 
//     for(const f of file)
//     {
//         console.log(f);
//     }
//     console.log("File Read SuccessFully");
// }catch(err)
// {
//     console.log(err);
// }

//Write A File
// try
// {
//     await fs.writeFile('Readme.md',"Hii Node js");
// }catch(err)
// {
//     console.log(err);
// }

//Read Data
try
{

    const data=await fs.readFile('Readme.md',"ascii");
    console.log(data);
}catch(err)
{
    console.log(err);
}