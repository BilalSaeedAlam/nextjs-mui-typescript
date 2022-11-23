// check file types
export const validateFile = (file: any) => {
  const validTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/x-icon",
    "image/svg+xml",
  ];
  return validTypes.indexOf(file.type) !== -1;
};

// fike size
export const fileSize = (size: any) => {
  if (size === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(size) / Math.log(k));
  return parseFloat((size / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

// file type
export const fileType = (fileName: any) => {
  return (
    fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length) ||
    fileName
  );
};
