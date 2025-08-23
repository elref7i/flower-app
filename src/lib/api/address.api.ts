import getTokenFromCookies from "../utils/get-cookies-token";
export async function getAllAddresses() {
    // get user token
    const token = await getTokenFromCookies();
    if (!token) throw new Error("You should signin");
    const response = await fetch(`${process.env.API}/addresses`, {
        headers: {
            Authorization: `Bearer ${token.token}`,
            "Content-Type": "application/json",
        },
    });
    const addresses = await response.json();
    if (!response.ok) throw new Error("Error:failed to get addresses");
    console.log(addresses.addresses)
    return addresses.addresses;
}
