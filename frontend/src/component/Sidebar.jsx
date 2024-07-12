import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 bg-third left-0 z-40 w-52 h-screen"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/admin"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/admin-artikel">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="ms-3">Artikel</span>
              </a>
            </Link>
          </li>
          <li>
            <Link
              to="/admin-olahraga"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 dark:text-gray-400 transition duration-75 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
              >
                <path
                  d="M41.4525 10.315C42.2775 11.29 42.98 12.37 43.5375 13.5325C43.0732 13.9976 42.5218 14.3666 41.9148 14.6184C41.3078 14.8702 40.6572 14.9999 40 15C39.1067 15.0002 38.2296 14.7611 37.46 14.3075L41.4525 10.315ZM39.685 8.54502L35.6925 12.54C35.1267 11.5853 34.8958 10.469 35.0361 9.36816C35.1765 8.26729 35.6802 7.24474 36.4675 6.46252C37.63 7.02002 38.71 7.72252 39.685 8.54502ZM45 20C45.0012 18.6572 44.8221 17.3202 44.4675 16.025C43.2175 16.95 41.6725 17.5 40 17.5C38.4419 17.5003 36.9224 17.0154 35.6525 16.1125L33.0175 18.75L42.525 28.2575C44.0875 25.8875 45 23.05 45 20ZM32.5 10C32.5 8.32502 33.0475 6.78002 33.975 5.53252C32.6798 5.17789 31.3429 4.99879 30 5.00002C27.064 4.99486 24.1916 5.85578 21.7425 7.47502L31.25 16.9825L33.885 14.345C32.9835 13.0756 32.4995 11.557 32.5 10ZM29.2675 22.5C32.2127 25.7837 34.1241 29.863 34.7625 34.2275C37.1301 33.4337 39.2621 32.0614 40.965 30.235L31.25 20.5175L29.2675 22.5ZM29.4825 18.75L27.5 20.73C24.217 17.7853 20.1386 15.8739 15.775 15.235C16.5692 12.8683 17.9415 10.7373 19.7675 9.03502L29.4825 18.75ZM8.75 17.5C7.75544 17.5 6.80161 17.8951 6.09835 18.5984C5.39509 19.3016 5 20.2555 5 21.25V25C5 30.3044 7.10714 35.3914 10.8579 39.1422C14.6086 42.8929 19.6957 45 25 45H28.75C29.7446 45 30.6984 44.6049 31.4017 43.9017C32.1049 43.1984 32.5 42.2446 32.5 41.25V37.5C32.5 32.1957 30.3929 27.1086 26.6421 23.3579C22.8914 19.6072 17.8043 17.5 12.5 17.5H8.75ZM15.365 27.865C15.4811 27.7486 15.6191 27.6563 15.7709 27.5932C15.9228 27.5302 16.0856 27.4978 16.25 27.4978C16.4144 27.4978 16.5772 27.5302 16.7291 27.5932C16.8809 27.6563 17.0189 27.7486 17.135 27.865L22.135 32.865C22.3697 33.0997 22.5016 33.4181 22.5016 33.75C22.5016 34.082 22.3697 34.4003 22.135 34.635C21.9003 34.8697 21.5819 35.0016 21.25 35.0016C20.9181 35.0016 20.5997 34.8697 20.365 34.635L15.365 29.635C15.2486 29.5189 15.1562 29.381 15.0932 29.2291C15.0302 29.0772 14.9978 28.9144 14.9978 28.75C14.9978 28.5856 15.0302 28.4228 15.0932 28.2709C15.1562 28.1191 15.2486 27.9811 15.365 27.865Z"
                  fill="#6b7280"
                />
              </svg>

              <span className="ms-3">Olahraga</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin-membaca"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_5331_16581)">
                  <path
                    d="M13.8906 7.21875H38.8906V9.37153H13.8906V7.21875Z"
                    fill="#6b7280"
                  />
                  <path
                    d="M40.2791 11.1146H13.6958C13.3413 11.1096 12.9916 11.0328 12.6676 10.8889C12.3436 10.7451 12.0522 10.5371 11.8107 10.2775C11.5693 10.0179 11.383 9.71215 11.263 9.37861C11.143 9.04507 11.0918 8.69068 11.1124 8.33681C11.1107 7.63258 11.3765 6.95398 11.8561 6.43829C12.3357 5.9226 12.9933 5.60832 13.6958 5.55903H40.2791C40.6474 5.55903 41.0007 5.4127 41.2612 5.15223C41.5216 4.89176 41.668 4.5385 41.668 4.17014C41.668 3.80178 41.5216 3.44851 41.2612 3.18805C41.0007 2.92758 40.6474 2.78125 40.2791 2.78125H13.6958C12.2563 2.83166 10.8927 3.43916 9.8925 4.47561C8.89232 5.51207 8.33377 6.89646 8.33465 8.33681C8.32074 8.56344 8.32074 8.79072 8.33465 9.01736C8.32127 9.12807 8.32127 9.23999 8.33465 9.35069V41.6701C8.33377 43.1105 8.89232 44.4949 9.8925 45.5313C10.8927 46.5678 12.2563 47.1753 13.6958 47.2257H40.2791C40.6474 47.2257 41.0007 47.0794 41.2612 46.8189C41.5216 46.5584 41.668 46.2052 41.668 45.8368V12.6007C41.6688 12.2228 41.5256 11.8589 41.2676 11.5828C41.0096 11.3067 40.6561 11.1393 40.2791 11.1146Z"
                    fill="#6b7280"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5331_16581">
                    <rect width="50" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="ms-3">Membaca</span>
            </Link>
          </li>
          <li>
            <Link
              to="/admin-user"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
              </svg>
              <span className="ms-3">Users</span>
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15 2h-1c-2.828 0-4.243 0-5.121.879C8 3.757 8 5.172 8 8v8c0 2.828 0 4.243.879 5.121C9.757 22 11.172 22 14 22h1c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2"
                  opacity="0.6"
                />
                <path
                  fill="currentColor"
                  d="M8 8c0-1.538 0-2.657.141-3.5H8c-2.357 0-3.536 0-4.268.732C3 5.964 3 7.143 3 9.5v5c0 2.357 0 3.535.732 4.268c.732.732 1.911.732 4.268.732h.141C8 18.657 8 17.538 8 16v-4.75z"
                  opacity="0.4"
                />
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M4.47 11.47a.75.75 0 0 0 0 1.06l2 2a.75.75 0 0 0 1.06-1.06l-.72-.72H14a.75.75 0 0 0 0-1.5H6.81l.72-.72a.75.75 0 1 0-1.06-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="ms-3">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
