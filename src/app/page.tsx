import FileUploadInput from "@/components/common/file-input";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="p-20">
      <main className="space-y-4">
        <h1 className="text-7xl font-bold text-center text-maroon-500 dark:text-softpink-500">
          Flower App
        </h1>
        <FileUploadInput label="file" selectedFileName="Upload File Name" />
      </main>
    </div>
  );
}
