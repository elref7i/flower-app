declare type AuthContext={
    step:string,
    setStep:(step:string)=>void,
    email:string,
    setEmail:(email:string)=>void,
};