import getLoggeduser from "@/lib/api/profile.api";
import DropZoneImage from "./_components/drop-zone-image";
import UpdatePeofileForm from "./_components/update-peofile-form";

export default async function page() {
  const profileData = await getLoggeduser();
  console.log("🔁 FETCHING PROFILE DATA");
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
