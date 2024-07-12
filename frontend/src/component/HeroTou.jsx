import React from "react";
import Tou from "../assets/image/tou.svg";

export default function HeroTou() {
  return (
    <div>
      {/*Hero*/}
      <div className="bg-gradient-to-tr from-[#04364A] from-4% to-[#4FA7A9] to-100% p-10 lg:p-12 text-fourt font-Montserrat flex flex-col justify-center lg:flex-row">
        <img src={Tou} />
        <div className="lg:w-full flex items-center">
          <h1 className="text-xl font-bold text-center lg:text-6xl lg:text-left">
            Syarat dan Ketentuan Pengguna
          </h1>
        </div>
      </div>

      {/*konten*/}

      <div className="bg-fourt text-primary font-Montserrat p-5 flex flex-col gap-4 lg:gap-6 text-base lg:text-2xl lg:px-20 lg:py-12">
        <h1 className="text-secondary font-bold">
          Selamat Datang di Calmy Heal
        </h1>
        <p>
          Terima kasih telah mengunjungi situs web Calmy Heal. Dengan
          menggunakan situs web ini, Anda setuju untuk mematuhi dan terikat
          dengan syarat-syarat berikut. Harap baca dengan cermat:
        </p>
        <h1 className="font-bold">
          1. Fitur Calmy Challenge:
          <ul className="list-disc ml-4 font-normal lg:ml-6">
            <li>
              Calmy heal Menyediakan fitur challenge berisi panduan kegiatan
              olahraga dan membaca buku serta dapat mencatat kemajuan progress
              sehingga menjadi cara untuk memotivasi diri dan mengembangkan
              kebiasaan yang sehat untuk pengguna.
            </li>
            <li>
              Pengguna bertanggung jawab untuk memastikan bahwa mereka melakukan
              kegiatan yang disediakan oleh Calmy Challenge dengan aman dan
              sesuai dengan kemampuan fisik mereka. Layanan ini bukan pengganti
              nasihat, diagnosis, atau perawatan medis profesional.
            </li>
          </ul>
        </h1>
        <h1 className="font-bold">
          2. Fitur Calmy Edu:
          <ul className="list-disc ml-4 font-normal lg:ml-6">
            <li>
              Menyediakan konten edukatif dan informasi yang relevan tentang
              permasalahan stress.
            </li>
            <li>
              Calmy Edu berusaha untuk menyediakan informasi yang akurat dan
              terbaru. Namun, kami tidak menjamin bahwa semua informasi di situs
              ini bebas dari kesalahan atau kelalaian. Pengguna disarankan untuk
              memverifikasi informasi sebelum mengambil keputusan berdasarkan
              konten yang disediakan.
            </li>
          </ul>
        </h1>
        <h1 className="font-bold">
          3. Fitur Calmy Meditation:
          <ul className="list-disc ml-4 font-normal lg:ml-6">
            <li>
              Menyediakan 4 kategori pilihan permasalahan yaitu Stres, Fokus,
              Tidur dan Mood yang berisi rekaman video ini terdapat 3 macam
              yaitu stories music dan meditasi untuk relaksasi.
            </li>
            <li>
              Setiap rekaman disesuaikan dengan tujuan pengguna dalam
              memperbaiki kesehatan mental dan meningkatkan kualitas hidup
              secara keseluruhan.
            </li>
          </ul>
        </h1>
        <h1 className="font-bold">
          4. Kebijakan Privasi:
          <ul className="list-disc ml-4 font-normal lg:ml-6">
            <li>
              Kami berkomitmen untuk memberikan kebijakan privasi yang jelas dan
              transparan kepada pengguna.
            </li>
            <li>
              Pengguna memiliki kendali penuh atas informasi pribadi mereka dan
              bagaimana informasi tersebut digunakan.
            </li>
          </ul>
        </h1>
        <h1 className="font-bold">
          5. Tanggung Jawab Pengguna:
          <ul className="list-disc ml-4 font-normal lg:ml-6">
            <li>
              Dilarang keras menggunakan layanan ini untuk tujuan yang melanggar
              hukum atau merugikan orang lain.
            </li>
          </ul>
        </h1>
        <h1 className="font-bold">
          6. Perubahan Syarat Penggunaan:
          <ul className="list-disc ml-4 font-normal lg:ml-6">
            <li>
              Calmy Heal berhak untuk memodifikasi ketentuan ini kapan saja.
              Pengguna akan diberitahukan tentang perubahan signifikan melalui
              aplikasi atau email.
            </li>
          </ul>
        </h1>
        <p>
          Dengan menggunakan Calmy Heal, Anda menyatakan bahwa Anda telah
          membaca, memahami, dan menyetujui syarat-syarat penggunaan di atas.
          Jika Anda tidak menyetujui syarat-syarat ini, harap berhenti
          menggunakan situs web ini.
        </p>
        <p>Terima kasih atas perhatian dan kerja samanya!</p>
      </div>
    </div>
  );
}
