import React from "react";
import kebijakan from "../assets/image/kebijakan.svg";

export default function Kebijakan() {
  return (
    <div>
      {/*Hero*/}
      <div className="bg-gradient-to-tr from-[#04364A] from-4% to-[#4FA7A9] to-100% p-10 lg:p-12 text-fourt font-Montserrat flex flex-col justify-center lg:flex-row">
        <img src={kebijakan} className="order-1 lg:order-2" />
        <div className="lg:w-full flex items-center order-2 lg:order-1">
          <h1 className="text-xl font-bold text-center lg:text-6xl lg:text-left">
            Syarat dan Ketentuan Pengguna
          </h1>
        </div>
      </div>

      {/*konten*/}

      <div className="bg-fourt">
        <div className="bg-third lg:w-[1000px] text-primary font-Montserrat p-5 flex flex-col gap-4 lg:gap-6 text-base lg:text-2xl lg:mx-auto lg:my-12 rounded-md lg:rounded-xl">
          <h1 className="text-secondary font-bold">
            Selamat Datang di Calmy Heal
          </h1>
          <p>
            Calmy Heal menghargai privasi Anda dan berkomitmen untuk melindungi
            informasi pribadi yang Anda bagikan kepada kami. Kebijakan privasi
            ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan
            melindungi informasi pribadi Anda saat Anda menggunakan situs web
            kami. Dengan mengakses atau menggunakan layanan kami, Anda
            menyetujui pengumpulan dan penggunaan informasi sesuai dengan
            kebijakan ini.
          </p>
          <h1 className="font-bold">
            1. Informasi yang Kami Kumpulkan
            <br />
            <span className="font-medium">Informasi yang Anda Berikan:</span>
            <ul className="list-disc ml-4 font-normal lg:ml-6">
              <li>
                Pendaftaran Akun: Saat mendaftar untuk akun Calmy Heal, kami
                dapat mengumpulkan informasi seperti nama, alamat email, dan
                kata sandi.
              </li>
              <li>
                Penggunaan Fitur: Saat menggunakan fitur seperti challenge atau
                meditasi, Anda mungkin memberikan informasi tambahan seperti
                preferensi aktivitas, kemajuan, dan catatan pribadi.
              </li>
            </ul>
          </h1>
          <h1 className="font-medium">
            Informasi yang Dikumpulkan Otomatis:
            <ul className="list-disc ml-4 font-normal lg:ml-6">
              <li>
                Pendaftaran Akun: Saat mendaftar untuk akun Calmy Heal, kami
                dapat mengumpulkan informasi seperti nama, alamat email, dan
                kata sandi.
              </li>
              <li>
                Penggunaan Fitur: Saat menggunakan fitur seperti challenge atau
                meditasi, Anda mungkin memberikan informasi tambahan seperti
                preferensi aktivitas, kemajuan, dan catatan pribadi.
              </li>
            </ul>
          </h1>
          <h1 className="font-bold">
            2. Bagaimana Kami Menggunakan Informasi Anda
            <br />
            <span className="font-medium">
              Kami menggunakan informasi yang kami kumpulkan untuk
            </span>
            <ul className="list-disc ml-4 font-normal lg:ml-6">
              <li>
                Menyediakan dan Memelihara Layanan: Memastikan layanan kami
                berfungsi dengan baik dan memberikan pengalaman pengguna yang
                optimal.
              </li>
              <li>
                Personalisasi: Menyediakan konten yang disesuaikan dengan
                preferensi dan kemajuan Anda.
              </li>
              <li>
                Komunikasi: Mengirimkan pemberitahuan, pembaruan, dan komunikasi
                terkait layanan.
              </li>
              <li>
                Keamanan: Melindungi akun dan informasi Anda dari akses yang
                tidak sah.
              </li>
              <li>
                Analisis dan Pengembangan: Menggunakan data untuk analisis dan
                penelitian guna meningkatkan layanan kami.
              </li>
            </ul>
          </h1>
          <h1 className="font-bold">
            3. Berbagi Informasi Anda
            <br />
            <span className="font-medium">
              Kami tidak menjual, memperdagangkan, atau menyewakan informasi
              pribadi Anda kepada pihak ketiga. Kami hanya membagikan informasi
              Anda dalam keadaan berikut:
            </span>
            <ul className="list-disc ml-4 font-normal lg:ml-6">
              <li>
                Penyedia Layanan: Dengan penyedia layanan yang membantu kami
                dalam mengoperasikan layanan, seperti hosting, analitik, dan
                dukungan pelanggan, dengan ketentuan mereka setuju untuk menjaga
                kerahasiaan informasi.
              </li>
              <li>
                Kepatuhan Hukum: Jika diwajibkan oleh hukum atau perintah
                pengadilan, atau untuk melindungi hak, properti, atau
                keselamatan Calmy Heal, pengguna kami, atau lainnya.
              </li>
            </ul>
          </h1>
          <h1 className="font-bold">
            4. Keamanan Informasi
            <br />
            <span className="font-medium">
              Kami mengambil langkah-langkah keamanan yang wajar untuk
              melindungi informasi pribadi Anda dari akses yang tidak sah,
              perubahan, pengungkapan, atau penghancuran. Namun, tidak ada
              metode transmisi melalui internet atau penyimpanan elektronik yang
              sepenuhnya aman, sehingga kami tidak dapat menjamin keamanan
              absolut.
            </span>
          </h1>
          <h1 className="font-bold">
            5. Hak Anda
            <br />
            <span className="font-medium">Anda memiliki hak untuk:</span>
            <ul className="list-disc ml-4 font-normal lg:ml-6">
              <li>
                Akses dan Perbaikan: Mengakses dan memperbarui informasi pribadi
                Anda kapan saja melalui pengaturan akun Anda.
              </li>
              <li>
                Penghapusan: Meminta penghapusan informasi pribadi Anda, dengan
                pengecualian informasi yang kami diwajibkan untuk menyimpan
                menurut hukum.
              </li>
              <li>
                Penarikan Persetujuan: Menarik persetujuan Anda kapan saja,
                namun ini mungkin mempengaruhi kemampuan Anda untuk menggunakan
                layanan kami.
              </li>
            </ul>
          </h1>
          <h1 className="font-bold">
            6. Perubahan pada Kebijakan Privasi
            <br />
            <span className="font-medium">
              Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu
              untuk mencerminkan perubahan pada praktik kami atau alasan
              operasional, hukum, atau peraturan lainnya. Kami akan memberi tahu
              Anda tentang perubahan melalui email atau pemberitahuan di situs
              web kami sebelum perubahan berlaku.
            </span>
          </h1>
          <h1 className="font-bold">
            7. Kontak Kami
            <br />
            <span className="font-medium">
              Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan
              privasi ini atau praktik privasi kami, Silakan hubungi kami di:
              Email: support@calmyheal.com
            </span>
          </h1>
          <p>
            Dengan menggunakan layanan kami, Anda menyetujui kebijakan privasi
            ini. Terima kasih telah mempercayai Calmy Heal sebagai mitra Anda
            dalam perjalanan menuju kesehatan mental yang lebih baik.
          </p>
        </div>
      </div>
    </div>
  );
}
