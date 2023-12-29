const handleFile = (  files: any ) => {
  const file = files[0];
  let base64 = "";
  if (file) {
    const reader = new FileReader();
    reader.onload = async function (event: any) {
      // @ts-ignore
      let fichero = event.target.result.toString();
      let base64data = await btoa(fichero);
      base64 = base64data;
    };
    reader.readAsBinaryString(file);
  }
  return base64;
};

export default handleFile;
