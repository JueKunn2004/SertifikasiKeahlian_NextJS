import Image from "../../node_modules/next/image";

export default function Introduction() {
    return (
      <div className="w-screen h-auto bg-slate-800 p-8">
        <div className="flex justify-between items-center">
          {/* Teks di kiri */}
          <div>
            <p className="text-white">Sistem Informasi</p>
            <h2 className="text-7xl text-white">Hello, I'm</h2>
            <h2 className="text-7xl text-white">Aditya Julea Putra Lismianto</h2>
            <div className="my-8">
              <p className="text-white max-w-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptates quidem rem quod est dolorem accusamus inventore nisi
                cumque saepe reprehenderit.
              </p>
            </div>
          </div>
  
          {/* Gambar di kanan */}
          <div className="relative w-96 h-96">
            <Image
              src="/img/suka.png"
              alt="Aditya Julea Putra Lismianto"
              fill={true}
              priority={true}
              className="rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    );
  }
