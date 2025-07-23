import getLoggeduser from "@/lib/api/profile.api";
import DropZoneImage from "./_components/drop-zone-image";
import UpdatePeofileForm from "./_components/update-peofile-form";

export default async function page() {
  // Fetch data
  const profileData = await getLoggeduser();

  console.log();

  return (
    <>
      {/* Person Info */}
      <div className="flex items-center gap-2 pb-4">
        {/* Image Profile */}
        <DropZoneImage photo={profileData?.user && profileData.user.photo} />
      </div>

      {/* Update Profile */}
      {profileData?.user ? (
        <UpdatePeofileForm dataInfo={profileData} />
      ) : (
        <p className="text-maroon-600-800 font-semibold text-xl">
          Something went wrong while loading the profile.
        </p>
      )}
    </>
  );
}
