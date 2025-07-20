import DropZoneImage from "./_components/drop-zone-image";
import UpdatePeofileForm from "./_components/update-peofile-form";
import { JSON_HEADER } from "@/lib/constants/api.constants";
import getTokenFromCookies from "@/lib/utils/get-cookies-token";

async function getLoggeduser() {
  const token = await getTokenFromCookies();
  const response = await fetch(`${process.env.API!}/auth/profile-data`, {
    cache: "no-store",
    method: "Get",
    headers: {
      ...JSON_HEADER,
      Authorization: `Bearer ${token?.token}`,
    },
  });

  const payload: APIResponse<LoggedUserResponse> = await response.json();
  if ("error" in payload) throw new Error(payload.error);

  return payload;
}

export default async function page() {
  const profileData = await getLoggeduser();

  return (
    <>
      {/* Person Info */}
      <div className="flex items-center gap-2 pb-4">
        <DropZoneImage />
        <article>
          <h3 className="text-zinc-800 font-semibold text-xl">Upload Photo</h3>
          <p className="text-zinc-500">
            You can upload a .jpg, .png, or .gif photo with max size of 5MB.
          </p>
        </article>
      </div>
      {profileData?.user ? (
        <UpdatePeofileForm dataInfo={profileData} />
      ) : (
        <p>Something went wrong while loading the profile.</p>
      )}
    </>
  );
}
