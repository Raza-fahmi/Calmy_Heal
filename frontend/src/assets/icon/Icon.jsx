import React from "react";

const Icon = ({ name, className }) => {
  const renderIlustrasi = () => {
    switch (name) {
      case "menu":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7H21"
              stroke="#F9FAF9"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3 12H21"
              stroke="#F9FAF9"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3 17H21"
              stroke="#F9FAF9"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        );
      case "close":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.728 12.7279L21.2133 21.2132"
              stroke="#F9FAF9"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.7281 21.2132L21.2134 12.7279"
              stroke="#272E38"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      case "right":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 6L15 12L9 18" stroke="#33363F" stroke-width="2" />
          </svg>
        );
      case "left":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 6L9 12L15 18" stroke="#33363F" stroke-width="2" />
          </svg>
        );
      case "bintang":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
              fill="#04364A"
            />
          </svg>
        );
      case "bawah":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 18 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 8L0 0H18L9 8Z" fill="#252525" />
          </svg>
        );
      case "atas":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 15 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 5L19 13L0.999999 13L10 5Z" fill="#252525" />
          </svg>
        );
      case "youtube":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5826 2.18973C19.4687 1.76571 19.2455 1.37903 18.9353 1.06838C18.625 0.757739 18.2386 0.53403 17.8147 0.419643C16.2545 8.51495e-08 10 0 10 0C10 0 3.74554 -8.51495e-08 2.18527 0.417411C1.76121 0.531426 1.37461 0.755012 1.0643 1.06571C0.753989 1.37642 0.530891 1.7633 0.417411 2.1875C-8.51495e-08 3.75 0 7.00893 0 7.00893C0 7.00893 -8.51495e-08 10.2679 0.417411 11.8281C0.647321 12.6897 1.32589 13.3683 2.18527 13.5982C3.74554 14.0179 10 14.0179 10 14.0179C10 14.0179 16.2545 14.0179 17.8147 13.5982C18.6763 13.3683 19.3527 12.6897 19.5826 11.8281C20 10.2679 20 7.00893 20 7.00893C20 7.00893 20 3.75 19.5826 2.18973ZM8.01339 10V4.01786L13.192 6.98661L8.01339 10Z"
              fill="white"
            />
          </svg>
        );
      case "facebook":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 9 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88492 18.5447V9.4378H8.40405L8.73789 6.2995H5.88492L5.8892 4.72875C5.8892 3.91024 5.96713 3.47166 7.1452 3.47166H8.72006V0.333008H6.20057C3.17425 0.333008 2.10907 1.85542 2.10907 4.41563V6.29986H0.222656V9.43815H2.10907V18.5447H5.88492Z"
              fill="white"
            />
          </svg>
        );
      case "instagram":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.68867 0H15.0887C18.2887 0 20.8887 2.6 20.8887 5.8V14.2C20.8887 15.7383 20.2776 17.2135 19.1899 18.3012C18.1022 19.3889 16.6269 20 15.0887 20H6.68867C3.48867 20 0.888672 17.4 0.888672 14.2V5.8C0.888672 4.26174 1.49974 2.78649 2.58745 1.69878C3.67516 0.61107 5.15042 0 6.68867 0ZM6.48867 2C5.53389 2 4.61822 2.37928 3.94309 3.05442C3.26796 3.72955 2.88867 4.64522 2.88867 5.6V14.4C2.88867 16.39 4.49867 18 6.48867 18H15.2887C16.2435 18 17.1591 17.6207 17.8343 16.9456C18.5094 16.2705 18.8887 15.3548 18.8887 14.4V5.6C18.8887 3.61 17.2787 2 15.2887 2H6.48867ZM16.1387 3.5C16.4702 3.5 16.7881 3.6317 17.0226 3.86612C17.257 4.10054 17.3887 4.41848 17.3887 4.75C17.3887 5.08152 17.257 5.39946 17.0226 5.63388C16.7881 5.8683 16.4702 6 16.1387 6C15.8072 6 15.4892 5.8683 15.2548 5.63388C15.0204 5.39946 14.8887 5.08152 14.8887 4.75C14.8887 4.41848 15.0204 4.10054 15.2548 3.86612C15.4892 3.6317 15.8072 3.5 16.1387 3.5ZM10.8887 5C12.2148 5 13.4865 5.52678 14.4242 6.46447C15.3619 7.40215 15.8887 8.67392 15.8887 10C15.8887 11.3261 15.3619 12.5979 14.4242 13.5355C13.4865 14.4732 12.2148 15 10.8887 15C9.56259 15 8.29082 14.4732 7.35314 13.5355C6.41546 12.5979 5.88867 11.3261 5.88867 10C5.88867 8.67392 6.41546 7.40215 7.35314 6.46447C8.29082 5.52678 9.56259 5 10.8887 5ZM10.8887 7C10.093 7 9.32996 7.31607 8.76735 7.87868C8.20474 8.44129 7.88867 9.20435 7.88867 10C7.88867 10.7956 8.20474 11.5587 8.76735 12.1213C9.32996 12.6839 10.093 13 10.8887 13C11.6843 13 12.4474 12.6839 13.01 12.1213C13.5726 11.5587 13.8887 10.7956 13.8887 10C13.8887 9.20435 13.5726 8.44129 13.01 7.87868C12.4474 7.31607 11.6843 7 10.8887 7Z"
              fill="white"
            />
          </svg>
        );
      case "twitter":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 21 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.0885 5.10107L10.0451 4.38763C9.91505 2.53859 11.0567 0.849685 12.8631 0.194568C13.5278 -0.0384083 14.655 -0.0675304 15.3921 0.136324C15.681 0.22369 16.2302 0.514825 16.6204 0.776923L17.3285 1.25739L18.1088 1.0099C18.5424 0.878807 19.1205 0.660435 19.3805 0.514825C19.6262 0.383819 19.8429 0.31097 19.8429 0.354696C19.8429 0.602191 19.3083 1.44664 18.8603 1.91251C18.2533 2.56771 18.4268 2.62596 19.6551 2.18913C20.3922 1.94163 20.4065 1.94163 20.2621 2.21825C20.1753 2.36386 19.7273 2.87345 19.2504 3.33932C18.4412 4.14013 18.3979 4.2275 18.3979 4.89722C18.3979 5.93092 17.9065 8.0857 17.4152 9.26501C16.5048 11.478 14.5539 13.7638 12.603 14.914C9.85729 16.5301 6.20111 16.9378 3.12306 15.9914C2.09704 15.6711 0.333984 14.8558 0.333984 14.7102C0.333984 14.6665 0.868643 14.6083 1.519 14.5937C2.87738 14.5646 4.23576 14.186 5.39185 13.5163L6.17227 13.0504L5.27624 12.7447C4.00454 12.3079 2.86292 11.3033 2.57394 10.357C2.48717 10.0512 2.51609 10.0366 3.32535 10.0366L4.16354 10.0221L3.45542 9.68724C2.61724 9.26501 1.85136 8.55157 1.47561 7.8236C1.20101 7.29949 0.854266 5.97456 0.955413 5.87268C0.984251 5.82904 1.28778 5.91632 1.6346 6.03281C2.6317 6.39679 2.76177 6.30943 2.18372 5.69795C1.09986 4.59148 0.767495 2.94621 1.28778 1.3884L1.53346 0.689556L2.48717 1.63589C4.43814 3.54317 6.73585 4.67885 9.36593 5.01371L10.0885 5.10107Z"
              fill="white"
            />
          </svg>
        );
      case "arrow-left":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.625 10.5H4.375"
              stroke="#04364A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.5 16.625L4.375 10.5L10.5 4.375"
              stroke="#04364A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      case "kategori":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_4272_26281)">
              <path
                d="M4.93269 8.61538C7.03562 8.61538 8.74038 6.91062 8.74038 4.80769C8.74038 2.70477 7.03562 1 4.93269 1C2.82977 1 1.125 2.70477 1.125 4.80769C1.125 6.91062 2.82977 8.61538 4.93269 8.61538Z"
                stroke="#04364A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.3175 8.61538C17.4204 8.61538 19.1252 6.91062 19.1252 4.80769C19.1252 2.70477 17.4204 1 15.3175 1C13.2145 1 11.5098 2.70477 11.5098 4.80769C11.5098 6.91062 13.2145 8.61538 15.3175 8.61538Z"
                stroke="#04364A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.93269 19.0002C7.03562 19.0002 8.74038 17.2954 8.74038 15.1925C8.74038 13.0895 7.03562 11.3848 4.93269 11.3848C2.82977 11.3848 1.125 13.0895 1.125 15.1925C1.125 17.2954 2.82977 19.0002 4.93269 19.0002Z"
                stroke="#04364A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.3175 19.0002C17.4204 19.0002 19.1252 17.2954 19.1252 15.1925C19.1252 13.0895 17.4204 11.3848 15.3175 11.3848C13.2145 11.3848 11.5098 13.0895 11.5098 15.1925C11.5098 17.2954 13.2145 19.0002 15.3175 19.0002Z"
                stroke="#04364A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_4272_26281">
                <rect
                  width="19.9997"
                  height="20.0001"
                  fill="white"
                  transform="translate(0.125)"
                />
              </clipPath>
            </defs>
          </svg>
        );
      case "jam":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="7" stroke="#33363F" stroke-width="2" />
            <path
              d="M5.96472 3.1363C5.2865 3.31803 4.66807 3.67508 4.17157 4.17157C3.67508 4.66807 3.31803 5.2865 3.1363 5.96472"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M18.0353 3.1363C18.7135 3.31803 19.3319 3.67508 19.8284 4.17157C20.3249 4.66807 20.682 5.2865 20.8637 5.96472"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M12 8V11.75C12 11.8881 12.1119 12 12.25 12H15"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        );
      case "eye":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 4.5C5.60218 4.5 5.22064 4.65804 4.93934 4.93934C4.65804 5.22064 4.5 5.60218 4.5 6C4.5 6.39782 4.65804 6.77936 4.93934 7.06066C5.22064 7.34196 5.60218 7.5 6 7.5C6.39782 7.5 6.77936 7.34196 7.06066 7.06066C7.34196 6.77936 7.5 6.39782 7.5 6C7.5 5.60218 7.34196 5.22064 7.06066 4.93934C6.77936 4.65804 6.39782 4.5 6 4.5ZM6 8.5C5.33696 8.5 4.70107 8.23661 4.23223 7.76777C3.76339 7.29893 3.5 6.66304 3.5 6C3.5 5.33696 3.76339 4.70107 4.23223 4.23223C4.70107 3.76339 5.33696 3.5 6 3.5C6.66304 3.5 7.29893 3.76339 7.76777 4.23223C8.23661 4.70107 8.5 5.33696 8.5 6C8.5 6.66304 8.23661 7.29893 7.76777 7.76777C7.29893 8.23661 6.66304 8.5 6 8.5ZM6 2.25C3.5 2.25 1.365 3.805 0.5 6C1.365 8.195 3.5 9.75 6 9.75C8.5 9.75 10.635 8.195 11.5 6C10.635 3.805 8.5 2.25 6 2.25Z"
              fill="#111111"
            />
          </svg>
        );
      case "centang":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 21 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.5 22.75C16.299 22.75 21 17.7132 21 11.5C21 9.13071 20.3164 6.93249 19.149 5.1194L10.7284 15.144C10.0288 15.9768 8.79202 16.0979 7.9442 15.4166L4.04028 12.2795C3.60976 11.9336 3.54121 11.3041 3.88716 10.8736C4.2331 10.4431 4.86255 10.3745 5.29306 10.7205L9.19699 13.8576L17.8903 3.50842C15.9929 1.49411 13.3821 0.25 10.5 0.25C4.70101 0.25 0 5.2868 0 11.5C0 17.7132 4.70101 22.75 10.5 22.75Z"
              fill="#04364A"
            />
          </svg>
        );
      case "kamera":
        return (
          <svg
            className="w-full h-full"
            viewBox="0 0 144 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M131.25 31.5H111.438L100 19H62.5V31.5H94.5L105.938 44H131.25V119H31.25V62.75H18.75V119C18.75 125.875 24.375 131.5 31.25 131.5H131.25C138.125 131.5 143.75 125.875 143.75 119V44C143.75 37.125 138.125 31.5 131.25 31.5ZM50 81.5C50 98.75 64 112.75 81.25 112.75C98.5 112.75 112.5 98.75 112.5 81.5C112.5 64.25 98.5 50.25 81.25 50.25C64 50.25 50 64.25 50 81.5ZM81.25 62.75C91.5625 62.75 100 71.1875 100 81.5C100 91.8125 91.5625 100.25 81.25 100.25C70.9375 100.25 62.5 91.8125 62.5 81.5C62.5 71.1875 70.9375 62.75 81.25 62.75ZM31.25 31.5H50V19H31.25V0.25H18.75V19H0V31.5H18.75V50.25H31.25V31.5Z"
              fill="#F9FAF9"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return renderIlustrasi();
};

export default Icon;
