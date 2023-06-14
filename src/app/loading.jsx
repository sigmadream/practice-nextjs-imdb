import Image from "next/image";

export default function loading() {
    return (
        <div className="flex justify-center">
            <Image className="h-96" width="200" height="200" src="spinner.svg" alt="loading..." />
        </div>
    );
}
