// ====================== Response Function ======================
export const responseData = (message: string, data: any[]= []) => {
  return JSON.stringify({
    message: message,
    data: data
  });
}