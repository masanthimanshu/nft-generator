import jimp from "jimp";

function number() {
    let num = Math.round(Math.random() * 5) + 1;
    return num;
  }
  
  function bgImg() {
      return `./public/images/colours/Colour (${number()}).png`;
  }
  
  function faceImg() {
      return `./public/images/faces/Face (${number()}).png`;
  }
  
  function eyeImg() {
      return `./public/images/eyes/Eye (${number()}).png`;
  }
  
  function smileImg() {
      return `./public/images/smiles/Smile (${number()}).png`;
  }
  
  async function overlay() {
    let face = await jimp.read(faceImg());
    let eye = await jimp.read(eyeImg());
    let smile = await jimp.read(smileImg());
    let bg = await jimp.read(bgImg());
  
    face = await face
      bg.composite(face, 0, 0)
      bg.composite(eye, 0, 0)
      bg.composite(smile, 0, 0)
      await bg.writeAsync("public/images/savedImage/image.png");
  }
  
  export default overlay;