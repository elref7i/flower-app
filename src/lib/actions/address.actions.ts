'use server'

import { FormData, fullSchema } from "@/lib/schema/address.schema";
import getTokenFromCookies from "../utils/get-cookies-token";

//delete address
export async function deleteAddress(id: string) {
    // get user token
    const token = await getTokenFromCookies();
    if (!token) throw new Error("You should signin");
    const response = await fetch(`${process.env.API}/addresses/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token.token}`,
            "Content-Type": "application/json",
        },
    });
    const addresses = await response.json();
    console.log(addresses.address)
    if (!response.ok) throw new Error("Error:failed to delete address");
    return addresses.address;
}

//add address
export async function addAddress(formData: FormData) {
    // ✅ Validate input
    const parsed = fullSchema.safeParse(formData);
    if (!parsed.success) {
        throw new Error("Invalid input");
    }
    // get user token
    const token = await getTokenFromCookies();
    if (!token) throw new Error("You should signin");
    // ✅ Send request to backend API
    const response = await fetch(`${process.env.API}/addresses`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${token.token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data)
    })
    const data = await response.json();
    console.log(data);
    return data;
}

//update address
export async function updateAddress(id: string, formData: FormData) {
    // ✅ Validate input
    const parsed = fullSchema.safeParse(formData);
    if (!parsed.success) {
        throw new Error("Invalid input");
    }
    // get user token
    const token = await getTokenFromCookies();
    if (!token) throw new Error("You should signin");
    // ✅ Send request to backend API
    const response = await fetch(`${process.env.API}/addresses/${id}`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${token.token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data)
    });
    const data = await response.json();
    console.log(data);
    return data;
}



