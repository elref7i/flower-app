import { JSON_HEADER } from "@/lib/constants/api.constants";
import { TForgotPasswordFormFields } from "@/lib/schema/auth.schema";

import { ForgotPasswordResponse } from "@/lib/types/auth";
export const ForgetPass = async (ForgotPassInputs:TForgotPasswordFormFields)=>{
  console.log(`${process?.env.NEXT_PUBLIC_BASE_API}/auth/forgotPassword`)
    const response = await fetch(`${process?.env.NEXT_PUBLIC_BASE_API}/auth/forgotPassword`,{
    
        method:'POST',
        body:JSON.stringify(ForgotPassInputs),
        headers: {...JSON_HEADER},
    })
    console.log(response)
   
    const payload :APIResponse<ForgotPasswordResponse>  = await response.json();
   console.log(payload)
    if ("error" in payload) {
        const errorMessage =
          payload.error || "Something went wrong ";
         throw new Error(errorMessage);
      }
      return payload;   
}