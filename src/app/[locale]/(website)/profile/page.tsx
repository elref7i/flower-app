import getLoggeduser from "@/lib/api/profile.api";
import DropZoneImage from "./_components/drop-zone-image";
import UpdatePeofileForm from "./_components/update-peofile-form";

export default async function page() {
  // Fetch data
  const profileData = await getLoggeduser();

  return (
    <>
      {/* Person Info */}
      <div className="flex items-center gap-2 pb-4">
        {/* Image Profile */}
        <DropZoneImage />

        {/* Hints */}
        <article>
          {/* Title */}
          <h3 className="text-zinc-800 font-semibold text-xl dark:text-zinc-50">Upload Photo</h3>

          {/* Description */}
          <p className="text-zinc-500 dark:text-zinc-400">
            You can upload a .jpg, .png, or .gif photo with max size of 5MB.
          </p>
        </article>
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
