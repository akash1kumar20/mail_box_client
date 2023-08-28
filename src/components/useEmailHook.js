const useEmailHook = () => {
  const emailValue = localStorage.getItem("userEmail");
  let changeEmail = emailValue.replace("@", "").replace(".", "");
  return [changeEmail];
};

export default useEmailHook;
