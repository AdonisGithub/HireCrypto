
const nodemailer = require('nodemailer');

module.exports = function(app) {
   app.post("/api/contact", (req, res) =>{
      const htmlEmail = `
      <!DOCTYPE html>
      <html>
          <body>
              <div style="width:650px; background-color:white; border:#c7c3c3; border-width:1px; border-style: solid;">
                  <div style="margin-top:57px;">
                      <svg width="623px" height="60px" viewBox="0 0 116 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M42.4075 10.6388C42.2065 10.6388 42.0074 10.6692 41.8216 10.7282C41.6358 10.7872 41.467 10.8737 41.3248 10.9827C41.1826 11.0918 41.0698 11.2213 40.9929 11.3637C40.9159 11.5062 40.8763 11.659 40.8763 11.8132C40.8763 11.9675 40.9159 12.1202 40.9929 12.2627C41.0698 12.4052 41.1826 12.5347 41.3248 12.6437C41.467 12.7528 41.6358 12.8393 41.8216 12.8983C42.0074 12.9573 42.2065 12.9876 42.4075 12.9876C42.8135 12.9876 43.2029 12.8639 43.49 12.6436C43.7771 12.4234 43.9384 12.1247 43.9384 11.8132C43.9384 11.5018 43.7771 11.2031 43.49 10.9828C43.2029 10.7626 42.8135 10.6389 42.4075 10.6388V10.6388ZM41.5722 13.7426C41.3642 13.7426 41.1968 13.91 41.1968 14.118V21.0922C41.1968 21.3002 41.3642 21.4676 41.5722 21.4676H43.4344C43.6424 21.4676 43.8098 21.3002 43.8098 21.0922V14.118C43.8098 13.91 43.6424 13.7426 43.4344 13.7426H41.5722Z" fill="#66AD83"/>
                          <path d="M50.2053 13.2707C49.5921 13.2707 48.5151 14.0927 48.0756 14.45V14.118C48.0756 13.91 47.9082 13.7426 47.7003 13.7426H45.838C45.6301 13.7426 45.4626 13.91 45.4626 14.118V21.0923C45.4626 21.3002 45.6301 21.4676 45.838 21.4676H47.7003C47.9082 21.4676 48.0756 21.3002 48.0756 21.0923V16.4272C48.2067 16.2905 48.5955 15.8962 49.0337 15.5611C49.5718 15.1496 50.9925 15.2881 51.4013 15.2881C51.8101 15.2881 51.7778 14.7758 51.7778 14.7758V13.7552C51.7778 13.2774 51.379 13.2707 51.379 13.2707H50.2053Z" fill="#66AD83"/>
                          <path d="M29.0126 11.0352C28.8046 11.0352 28.6372 11.2026 28.6372 11.4106V21.0468C28.6372 21.2547 28.8046 21.4222 29.0126 21.4222H31.2023C31.4102 21.4222 31.5777 21.2547 31.5777 21.0468V17.157H36.4398V21.0468C36.4398 21.2547 36.6069 21.4222 36.8149 21.4222H39.005C39.2129 21.4222 39.3803 21.2547 39.3803 21.0468V11.4106C39.3803 11.2026 39.2129 11.0352 39.005 11.0352H36.8149C36.6069 11.0352 36.4398 11.2026 36.4398 11.4106V14.8767H31.5777V11.4106C31.5777 11.2026 31.4102 11.0352 31.2023 11.0352H29.0126Z" fill="#66AD83"/>
                          <path d="M56.5277 13.1998C52.6315 13.1998 52.2091 16.015 52.2091 17.6055C52.2091 19.196 53.2903 21.6728 56.6906 21.6728C60.091 21.6728 60.5783 20.0611 60.5783 19.6921C60.5783 19.323 60.5238 19.1339 60.5238 19.1339H58.5263C58.5263 19.1339 57.7913 19.943 56.7392 19.943C55.6871 19.943 54.9485 19.1504 54.9158 18.2164H60.7352V16.9372C60.7352 16.1584 60.424 13.1998 56.5277 13.1998ZM56.5396 15.0155C58.0331 15.0155 58.2023 16.6198 58.2023 16.6198H54.864C54.864 15.9708 55.1454 15.0155 56.5396 15.0155V15.0155Z" fill="#66AD83"/>
                          <path d="M68.6597 13.1383C69.5395 13.1383 69.9468 13.7499 70.1368 14.1858C70.3269 14.6218 70.6105 15.0373 71.6892 15.0373C72.7678 15.0373 72.9841 14.6703 72.9841 13.8284C72.9841 12.9865 71.9501 10.8833 69.6933 10.8833C67.4365 10.8833 68.6514 10.8833 66.2757 10.8833C63.8999 10.8833 61.5583 12.5471 61.5583 16.3814C61.5583 20.2157 64.5137 21.6405 65.7772 21.6405C67.0407 21.6405 67.5305 21.6405 69.1283 21.6405C70.7261 21.6405 73.1176 20.6161 73.1176 18.5497C73.1176 18.5497 73.2779 17.3972 72.4109 17.3972C71.5438 17.3972 70.9761 17.2368 70.6995 17.9008C70.423 18.5648 69.7218 19.4673 68.6681 19.4673C67.6144 19.4673 66.8754 19.4673 66.2589 19.4673C65.6424 19.4673 64.5236 18.666 64.5236 17.4123C64.5236 16.1585 64.5236 16.2782 64.5236 15.4704C64.5236 14.6626 64.9255 13.091 66.4563 13.091C67.987 13.091 68.6597 13.1383 68.6597 13.1383V13.1383Z" fill="#4C8564"/>
                          <path d="M78.9516 13.2707C78.3384 13.2707 77.2614 14.0927 76.822 14.45V14.1179C76.822 13.91 76.6545 13.7426 76.4466 13.7426H74.5843C74.3764 13.7426 74.209 13.91 74.209 14.1179V21.0922C74.209 21.3002 74.3764 21.4676 74.5843 21.4676H76.4466C76.6545 21.4676 76.822 21.3002 76.822 21.0922V16.4272C76.953 16.2905 77.3418 15.8962 77.78 15.5611C78.3181 15.1496 79.7388 15.2881 80.1476 15.2881C80.5564 15.2881 80.5241 14.7757 80.5241 14.7757V13.7551C80.5241 13.2774 80.1253 13.2707 80.1253 13.2707H78.9516Z" fill="#4C8564"/>
                          <path d="M82.8027 13.4939C83.143 13.4939 83.3883 13.6681 83.6289 14.6408C83.8695 15.6135 84.7051 18.9194 85.8588 19.0859C85.8588 19.0859 87.123 14.8337 87.3229 14.1136C87.5228 13.3935 87.8507 13.3678 88.1429 13.3678C88.4352 13.3678 89.0896 13.3678 89.4003 13.3678C89.711 13.3678 90.1076 13.5763 89.7978 14.5212C89.488 15.4661 87.8601 21.1377 87.576 22.0302C87.292 22.9227 86.2902 24.147 85.2846 24.147C84.279 24.147 83.8969 24.147 83.3363 24.147C82.7758 24.147 82.2308 23.9997 82.2308 23.3679C82.2308 22.736 82.2308 22.9086 82.2308 22.6742C82.2308 22.4398 82.3931 22.1942 82.7057 22.1942C83.0183 22.1942 83.3802 22.1942 83.9227 22.1942C84.4652 22.1942 85.0953 22.0501 85.395 20.99C85.395 20.99 83.7956 21.0683 83.0117 19.7447C82.2278 18.4211 81.0208 14.6203 80.8517 13.9984C80.6825 13.3765 81.1457 13.4603 81.3911 13.4603C81.6365 13.4603 82.8027 13.4939 82.8027 13.4939V13.4939Z" fill="#4C8564"/>
                          <path d="M95.8622 13.1505C94.271 13.1505 93.1818 14.105 93.1818 14.105C93.1818 14.105 93.2393 13.4549 92.8798 13.4549C92.8798 13.4549 91.6179 13.4469 91.3443 13.4469C91.0708 13.4469 90.8242 13.5023 90.8242 14.1623V23.4256C90.8242 23.752 90.8576 24.0369 91.4356 24.0369H92.7739C93.3613 24.0369 93.4561 23.7378 93.4561 23.246V21.2307C93.4561 21.2307 94.4909 21.7109 95.6945 21.7109C96.898 21.7109 99.5185 20.7739 99.5185 17.4919C99.5185 14.2098 97.4535 13.1505 95.8622 13.1505V13.1505ZM95.2159 15.1228C96.2527 15.1228 96.8136 16.1502 96.8136 16.624V18.0937C96.8136 18.6336 96.5112 19.8203 95.1761 19.8203C93.841 19.8203 93.5138 19.4673 93.5138 19.4673L93.4907 15.9728C93.4907 15.9728 94.1793 15.1228 95.2159 15.1228Z" fill="#4C8564"/>
                          <path d="M103.386 13.8913H105.519C105.924 13.8913 105.889 14.402 105.889 14.8331C105.889 15.2643 105.881 15.6815 105.476 15.6815H103.39V18.7056C103.39 19.454 103.968 19.8126 104.473 19.8126H105.822C106.333 19.8126 106.343 20.0475 106.343 20.571C106.343 21.0945 106.481 21.5816 105.592 21.5816H103.696C102.727 21.5816 100.849 21.4465 100.849 19.1441V11.8431C100.849 10.9965 101.058 10.8965 101.404 10.8965H102.769C103.029 10.8965 103.417 10.9314 103.417 11.5444C103.413 12.3267 103.4 13.1091 103.386 13.8913H103.386Z" fill="#4C8564"/>
                          <path d="M111.395 13.2274C108.966 13.2274 106.996 14.1325 106.996 17.4139C106.996 20.6954 108.966 21.6008 111.395 21.6008C113.825 21.6008 115.794 20.7243 115.794 17.4139C115.794 14.1035 113.825 13.2274 111.395 13.2274ZM111.395 15.0923C112.4 15.0923 113.214 15.5962 113.214 17.5003C113.214 19.4043 112.4 19.9085 111.395 19.9085C110.39 19.9085 109.576 19.3877 109.576 17.5003C109.576 15.6129 110.39 15.0923 111.395 15.0923V15.0923Z" fill="#4C8564"/>
                          <path d="M16.0985 20.8336C16.0985 20.8336 16.4061 22.4945 15.4864 24.2301C14.5666 25.9657 12.7459 28.4629 12.1548 28.5419C11.5637 28.6209 12.5216 25.788 12.5259 24.8383C12.5302 23.8885 12.3432 23.1237 12.3432 23.1237C12.3432 23.1237 15.7597 21.1497 16.0985 20.8336V20.8336Z" fill="url(#paint0_linear_3_42)"/>
                          <path d="M16.0983 20.8338C16.0983 20.8338 16.406 22.4947 15.4863 24.2303C14.5666 25.9659 12.746 28.4627 12.1549 28.5417C12.1316 28.5447 12.1109 28.5437 12.0924 28.5377C12.7963 28.1526 14.4226 25.8895 15.2751 24.2807C16.0658 22.7886 15.95 21.3545 15.9018 20.9808C15.9948 20.9171 16.0635 20.8664 16.0984 20.8338L16.0983 20.8338Z" fill="url(#paint1_linear_3_42)"/>
                          <path d="M15.8868 20.8853C15.8868 20.8853 16.1944 22.5462 15.2747 24.2818C14.4221 25.8908 12.7953 28.1539 12.0915 28.5386C12.0616 28.5306 12.0514 28.5196 12.0429 28.508C12.7401 28.1423 14.3801 25.8625 15.2374 24.2446C16.0647 22.6834 15.901 21.1943 15.8594 20.9084C15.8693 20.9004 15.8797 20.8921 15.8868 20.8853L15.8868 20.8853Z" fill="url(#paint2_linear_3_42)"/>
                          <path d="M8.95727 13.6927C8.95727 13.6927 7.29643 13.3852 5.56082 14.3049C3.82522 15.2246 1.32805 17.0454 1.24903 17.6365C1.17 18.2275 4.00295 17.2697 4.95267 17.2654C5.9024 17.2614 6.66727 17.4481 6.66727 17.4481C6.66727 17.4481 8.64122 14.0316 8.95727 13.6927V13.6927Z" fill="url(#paint3_linear_3_42)"/>
                          <path d="M8.95711 13.6929C8.95711 13.6929 7.29625 13.3853 5.56065 14.305C3.82504 15.2247 1.32823 17.0453 1.24921 17.6364C1.24611 17.6596 1.24761 17.6803 1.25321 17.6989C1.63834 16.995 3.90144 15.3687 5.5102 14.5162C7.00236 13.7255 8.43646 13.8413 8.8102 13.8895C8.87389 13.7965 8.92456 13.7278 8.95709 13.693L8.95711 13.6929Z" fill="url(#paint4_linear_3_42)"/>
                          <path d="M8.90558 13.9045C8.90558 13.9045 7.24472 13.5969 5.50912 14.5166C3.90014 15.3692 1.63698 16.996 1.25235 17.6998C1.26005 17.7297 1.27139 17.7399 1.283 17.7484C1.64865 17.0512 3.92844 15.4112 5.5464 14.5538C7.10755 13.7266 8.59666 13.8902 8.88257 13.9319C8.89057 13.9219 8.89892 13.9117 8.90559 13.9045L8.90558 13.9045Z" fill="url(#paint5_linear_3_42)"/>
                          <path d="M5.44436 19.7834C4.83742 19.9806 4.08201 20.2336 3.67911 20.6834L9.11113 26.1154C9.56093 25.7125 9.81398 24.9571 10.0111 24.3502L5.44436 19.7834Z" fill="url(#paint6_linear_3_42)"/>
                          <path d="M6.29836 18.9294C5.69142 19.1265 4.93601 19.3796 4.53311 19.8294L9.96513 25.2614C10.4149 24.8585 10.668 24.1031 10.8651 23.4962L6.29836 18.9294Z" fill="url(#paint7_linear_3_42)"/>
                          <path d="M26.8792 2.9153C26.8792 2.9153 21.3559 2.25172 15.553 6.47719C9.75013 10.7027 5.87451 18.8135 5.87451 18.8135L10.981 23.9199C10.981 23.9199 19.0919 20.0444 23.3173 14.2415C27.5428 8.43862 26.8792 2.9153 26.8792 2.9153V2.9153Z" fill="url(#paint8_linear_3_42)"/>
                          <path d="M26.8792 2.9153C27.0683 5.18135 26.6261 7.04463 26.1665 8.58297C23.8882 7.4748 22.3102 5.7584 21.2103 3.62679C22.8941 3.13755 24.5292 2.80591 26.8792 2.9153V2.9153Z" fill="#4C8564"/>
                          <g filter="url(#filter0_f_3_42)">
                          <path d="M26.627 3.04697C26.627 3.04697 18.1647 5.47857 13.6441 9.93697C9.12346 14.3954 7.02746 19.2021 7.02746 19.2021L8.73689 20.854C8.73689 20.854 11.4379 15.9099 15.0393 12.4011C18.6407 8.89243 26.627 3.04697 26.627 3.04697V3.04697Z" fill="#87D0A8"/>
                          </g>
                          <path d="M12.8439 16.9506C12.8439 16.9506 12.275 16.766 11.4904 17.2677C10.0705 18.1757 6.3459 22.8668 6.62876 23.1658C6.92775 23.4486 11.6189 19.7242 12.5269 18.3043C13.0286 17.5196 12.8439 16.9506 12.8439 16.9506V16.9506Z" fill="url(#paint9_linear_3_42)"/>
                          <path d="M12.8439 16.9506L12.7167 16.9261C12.0626 17.421 11.1429 18.5213 6.61603 23.0861L6.62876 23.1657L6.70838 23.1784C11.2732 18.6516 12.3735 17.7318 12.8683 17.0777L12.8439 16.9506Z" fill="url(#paint10_linear_3_42)"/>
                          <path d="M3.88185 20.8861C3.88185 20.8861 3.0373 21.6455 1.93787 23.6746C0.838453 25.7038 0 29.7944 0 29.7944C0 29.7944 4.09075 28.9561 6.11991 27.8567C8.14907 26.7572 8.90842 25.9127 8.90842 25.9127L3.88185 20.8861Z" fill="url(#paint11_linear_3_42)"/>
                          <path d="M21.5526 12.3006C21.0144 12.8389 20.2844 13.1412 19.5233 13.1412C18.7621 13.1412 18.0321 12.8389 17.4939 12.3006C16.9557 11.7624 16.6533 11.0324 16.6533 10.2713C16.6533 9.51011 16.9557 8.78012 17.4939 8.2419C17.7604 7.9754 18.0768 7.764 18.425 7.61977C18.7732 7.47554 19.1464 7.40131 19.5233 7.40131C19.9001 7.40131 20.2733 7.47554 20.6215 7.61977C20.9697 7.764 21.2861 7.9754 21.5526 8.2419C22.0908 8.78012 22.3932 9.51011 22.3932 10.2713C22.3932 11.0324 22.0909 11.7624 21.5526 12.3006V12.3006Z" fill="#4A8263"/>
                          <path d="M21.5118 12.3414C20.391 13.4622 18.619 13.4171 17.4982 12.2962C16.3775 11.1754 16.3323 9.40344 17.4531 8.28264C18.5739 7.16186 20.391 7.16187 21.5118 8.28266C22.6326 9.40345 22.6326 11.2206 21.5118 12.3414V12.3414Z" fill="url(#paint12_linear_3_42)"/>
                          <path d="M21.0969 11.9654C20.2553 12.807 18.8056 12.8334 17.8833 11.9112C16.9611 10.9889 16.9842 9.5425 17.8291 8.6976C18.7514 7.77534 20.2106 7.73933 21.1329 8.6616C22.0551 9.58385 22.0191 11.0431 21.0969 11.9654V11.9654Z" fill="#498061"/>
                          <path d="M21.1163 11.946C20.2748 12.7876 18.825 12.814 17.9028 11.8918C16.9805 10.9695 17.0037 9.52307 17.8486 8.67817C18.7708 7.75592 20.2301 7.71991 21.1523 8.64217C22.0746 9.56443 22.0386 11.0237 21.1164 11.946H21.1163Z" fill="url(#paint13_linear_3_42)"/>
                          <path d="M21.071 11.7648C20.8713 11.9645 20.6342 12.1229 20.3733 12.231C20.1124 12.339 19.8328 12.3947 19.5503 12.3947C19.2679 12.3947 18.9883 12.339 18.7274 12.231C18.4665 12.1229 18.2294 11.9645 18.0297 11.7648C17.83 11.5651 17.6716 11.328 17.5635 11.0671C17.4555 10.8062 17.3998 10.5266 17.3998 10.2442C17.3998 9.96175 17.4555 9.68212 17.5635 9.4212C17.6716 9.16029 17.83 8.92322 18.0297 8.72353C18.433 8.32023 18.98 8.09366 19.5503 8.09366C20.1207 8.09366 20.6677 8.32024 21.071 8.72354C21.4743 9.12684 21.7009 9.67382 21.7009 10.2442C21.7009 10.8145 21.4743 11.3615 21.071 11.7648V11.7648Z" fill="url(#paint14_linear_3_42)"/>
                          <g filter="url(#filter1_f_3_42)">
                          <path d="M20.6598 11.0872C19.7103 11.1525 20.4639 9.81061 18.7862 10.46C17.8614 10.818 17.5794 9.6757 18.2806 8.97446C18.9819 8.27321 20.1188 8.27321 20.8201 8.97446C21.5213 9.6757 21.4845 11.0305 20.6598 11.0872Z" fill="url(#paint15_linear_3_42)"/>
                          </g>
                          <g filter="url(#filter2_f_3_42)">
                          <path d="M10.8721 23.811C11.3535 23.9693 11.9576 23.3075 12.473 23.1361C16.2409 21.0071 19.8581 18.4561 22.6451 15.1103C24.0242 13.4248 25.1298 11.5111 25.8694 9.46134C21.7173 16.9121 16.3002 20.379 10.8721 23.811Z" fill="#3D6D54"/>
                          </g>
                          <g filter="url(#filter3_f_3_42)">
                          <path d="M12.8438 16.9506C12.8438 16.9506 12.9837 17.4746 12.465 18.2424C11.5265 19.6318 6.89301 23.4139 6.62872 23.1658C6.92773 23.4486 11.6189 19.7241 12.5268 18.3042C13.0286 17.5196 12.8438 16.9506 12.8438 16.9506V16.9506ZM12.8438 16.9506C12.8438 16.9506 12.275 16.766 11.4903 17.2677C10.0704 18.1757 6.34587 22.8668 6.62872 23.1658C6.38059 22.9015 10.1629 18.2681 11.5522 17.3296C12.32 16.811 12.8438 16.9506 12.8438 16.9506Z" fill="#46805C"/>
                          </g>
                          <g filter="url(#filter4_f_3_42)">
                          <path d="M26.2768 5.08011C26.2768 5.08011 26.0525 7.02843 25.088 8.63838C24.1235 10.2483 24.9923 8.82024 25.6173 7.04897C26.1159 5.63605 26.2768 5.08011 26.2768 5.08011V5.08011Z" fill="#5CBF8A"/>
                          </g>
                          <path d="M4.60754 21.6118C4.60754 21.6118 3.79847 22.3603 2.61007 24.21C1.42166 26.0597 0.184967 29.6095 0.184967 29.6095C0.184967 29.6095 3.73489 28.3729 5.58458 27.1845C7.43427 25.9961 8.18272 25.187 8.18272 25.187L4.60754 21.6118Z" fill="url(#paint16_linear_3_42)"/>
                          <path d="M5.24198 22.2462C5.24198 22.2462 4.44367 23.0055 3.13791 24.7378C1.83215 26.4701 0.184967 29.6095 0.184967 29.6095C0.184967 29.6095 3.32438 27.9624 5.05672 26.6566C6.78906 25.3509 7.54827 24.5526 7.54827 24.5526L5.24198 22.2462Z" fill="url(#paint17_linear_3_42)"/>
                          <defs>
                          <filter id="filter0_f_3_42" x="5.86508" y="1.88458" width="21.9243" height="20.1319" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="0.581195" result="effect1_foregroundBlur_3_42"/>
                          </filter>
                          <filter id="filter1_f_3_42" x="17.739" y="8.29902" width="3.72506" height="2.93999" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="0.0747504" result="effect1_foregroundBlur_3_42"/>
                          </filter>
                          <filter id="filter2_f_3_42" x="10.2128" y="8.80214" width="16.3158" height="15.6923" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="0.329606" result="effect1_foregroundBlur_3_42"/>
                          </filter>
                          <filter id="filter3_f_3_42" x="6.50825" y="16.8122" width="6.47403" height="6.474" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="0.0526056" result="effect1_foregroundBlur_3_42"/>
                          </filter>
                          <filter id="filter4_f_3_42" x="24.3385" y="4.76136" width="2.25706" height="4.8975" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feGaussianBlur stdDeviation="0.159372" result="effect1_foregroundBlur_3_42"/>
                          </filter>
                          <linearGradient id="paint0_linear_3_42" x1="14.1439" y1="21.9587" x2="13.3638" y2="28.0944" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#538D6F"/>
                          <stop offset="1" stop-color="#66AD83" stop-opacity="0.992152"/>
                          </linearGradient>
                          <linearGradient id="paint1_linear_3_42" x1="16.0116" y1="20.9088" x2="14.408" y2="26.7202" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#538C6F"/>
                          <stop offset="0.288624" stop-color="#4C8A65" stop-opacity="0.996078"/>
                          <stop offset="0.43291" stop-color="#5DC787" stop-opacity="0.996078"/>
                          <stop offset="0.583101" stop-color="#50906A" stop-opacity="0.996078"/>
                          <stop offset="1" stop-color="#5CA479" stop-opacity="0.996078"/>
                          </linearGradient>
                          <linearGradient id="paint2_linear_3_42" x1="15.9032" y1="21.1476" x2="14.4339" y2="26.151" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#45805C" stop-opacity="0.996078"/>
                          <stop offset="0.384866" stop-color="#86DFA9" stop-opacity="0.996078"/>
                          <stop offset="1" stop-color="#6BAE86" stop-opacity="0.992157"/>
                          </linearGradient>
                          <linearGradient id="paint3_linear_3_42" x1="7.83225" y1="15.6474" x2="1.69657" y2="16.4275" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#538D6F"/>
                          <stop offset="1" stop-color="#66AD83" stop-opacity="0.992152"/>
                          </linearGradient>
                          <linearGradient id="paint4_linear_3_42" x1="8.88215" y1="13.7797" x2="3.07075" y2="15.3832" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#538C6F"/>
                          <stop offset="0.288624" stop-color="#4C8A65" stop-opacity="0.996078"/>
                          <stop offset="0.43291" stop-color="#5DC787" stop-opacity="0.996078"/>
                          <stop offset="0.583101" stop-color="#50906A" stop-opacity="0.996078"/>
                          <stop offset="1" stop-color="#5CA479" stop-opacity="0.996078"/>
                          </linearGradient>
                          <linearGradient id="paint5_linear_3_42" x1="8.64335" y1="13.888" x2="3.63994" y2="15.3574" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#45805C" stop-opacity="0.996078"/>
                          <stop offset="0.384866" stop-color="#86DFA9" stop-opacity="0.996078"/>
                          <stop offset="1" stop-color="#6BAE86" stop-opacity="0.992157"/>
                          </linearGradient>
                          <linearGradient id="paint6_linear_3_42" x1="4.17444" y1="20.4891" x2="9.10036" y2="26.2642" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#2C523F"/>
                          <stop offset="0.186439" stop-color="#2C523F"/>
                          <stop offset="0.282456" stop-color="#3C795B"/>
                          <stop offset="0.475909" stop-color="#2C523F"/>
                          <stop offset="1" stop-color="#2C523F"/>
                          </linearGradient>
                          <linearGradient id="paint7_linear_3_42" x1="4.93584" y1="18.9957" x2="10.0841" y2="25.202" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#3B6D54"/>
                          <stop offset="0.203056" stop-color="#3B6D54"/>
                          <stop offset="0.301475" stop-color="#468F6B"/>
                          <stop offset="0.520024" stop-color="#3B6D54"/>
                          <stop offset="1" stop-color="#3B6D54"/>
                          </linearGradient>
                          <linearGradient id="paint8_linear_3_42" x1="12.8006" y1="9.10604" x2="19.2637" y2="16.0739" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#478264"/>
                          <stop offset="0.374008" stop-color="#83B59B"/>
                          <stop offset="0.737778" stop-color="#529774"/>
                          <stop offset="1" stop-color="#4C8B6B"/>
                          </linearGradient>
                          <linearGradient id="paint9_linear_3_42" x1="10.8978" y1="20.0442" x2="9.73552" y2="18.882" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#4E916A"/>
                          <stop offset="0.166088" stop-color="#54976F"/>
                          <stop offset="0.422354" stop-color="#5EA279"/>
                          <stop offset="0.564933" stop-color="#5DA278"/>
                          <stop offset="0.746002" stop-color="#589D73"/>
                          <stop offset="1" stop-color="#53976C"/>
                          </linearGradient>
                          <linearGradient id="paint10_linear_3_42" x1="12.9317" y1="17.1485" x2="6.99628" y2="22.8364" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#63AA80"/>
                          <stop offset="0.185797" stop-color="#64AB81"/>
                          <stop offset="0.246434" stop-color="#87D0A7"/>
                          <stop offset="0.403864" stop-color="#68A981"/>
                          <stop offset="1" stop-color="#5DA278"/>
                          </linearGradient>
                          <linearGradient id="paint11_linear_3_42" x1="6.86703" y1="27.0816" x2="3.54133" y2="30.4073" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#F57F0B"/>
                          <stop offset="1" stop-color="#FE8E1A"/>
                          </linearGradient>
                          <linearGradient id="paint12_linear_3_42" x1="17.4979" y1="8.20237" x2="21.6347" y2="12.325" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#365F48"/>
                          <stop offset="0.351809" stop-color="#559571"/>
                          <stop offset="1" stop-color="#365F48"/>
                          </linearGradient>
                          <linearGradient id="paint13_linear_3_42" x1="17.5054" y1="8.41276" x2="20.4712" y2="12.7736" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#264433"/>
                          <stop offset="0.494373" stop-color="#447B5C"/>
                          <stop offset="1" stop-color="#2F523D"/>
                          </linearGradient>
                          <linearGradient id="paint14_linear_3_42" x1="20.0221" y1="8.10715" x2="19.2399" y2="12.2775" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#B9DEEC"/>
                          <stop offset="1" stop-color="#65B6D4"/>
                          </linearGradient>
                          <linearGradient id="paint15_linear_3_42" x1="19.8811" y1="8.23661" x2="19.503" y2="10.5148" gradientUnits="userSpaceOnUse">
                          <stop stop-color="white"/>
                          <stop offset="1" stop-color="#87C6DE"/>
                          </linearGradient>
                          <linearGradient id="paint16_linear_3_42" x1="7.6291" y1="25.0548" x2="3.15434" y2="29.5296" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#F7C109"/>
                          <stop offset="1" stop-color="#FE8E1A"/>
                          </linearGradient>
                          <linearGradient id="paint17_linear_3_42" x1="6.34742" y1="23.7465" x2="1.65409" y2="28.4826" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#F6ED40"/>
                          <stop offset="1" stop-color="#FE8E1A"/>
                          </linearGradient>
                          </defs>
                      </svg>                    
                  </div>
                  <div style="display: flex; margin-left: 50px; margin-right: 50px;">
                      <div style="width: 45%; margin-top: 16px; margin-right: 10%;">
                          <h1 style="margin-bottom: 4px; font-size: 16px; font-family:bold, sans-serif;">First name:</h1>
                          <input type="text"  value="fistname" style="border: solid; padding-left: 8px; padding-right: 8px; padding-top: 16px; padding-bottom: 16px; border-radius: 8px; font-size: medium; width: -webkit-fill-available;" readonly><br>
                      </div>
                      <div style="width: 45%; margin-top: 16px;">
                          <h1 style="margin-bottom: 4px; font-size: 16px; font-family:bold, sans-serif;">Last name:</h1>
                          <input type="text"  value="name" style="border: solid; padding-left: 8px; padding-right: 8px; padding-top: 16px; padding-bottom: 16px; border-radius: 8px; font-size: medium; width: -webkit-fill-available;" readonly><br>
                      </div>
                  </div>
                  <div style="display: flex; margin-left: 50px; margin-right: 50px;">
                      <div style="width: 45%; margin-top: 16px; margin-right: 10%;">
                          <h1 style="margin-bottom: 4px; font-size: 16px; font-family:bold, sans-serif;">Email:</h1>
                          <input type="text"  value="asd@adsd.com" style="border: solid; padding-left: 8px; padding-right: 8px; padding-top: 16px; padding-bottom: 16px; border-radius: 8px; font-size: medium; width: -webkit-fill-available;" readonly><br>
                      </div>
                      <div style="width: 45%; margin-top: 16px;">
                          <h1 style="margin-bottom: 4px; font-size: 16px; font-family:bold, sans-serif;">Phone nunber:</h1>
                          <input type="text"  value="12324" style="border: solid; padding-left: 8px; padding-right: 8px; padding-top: 16px; padding-bottom: 16px; border-radius: 8px; font-size: medium; width: -webkit-fill-available;" readonly><br>
                      </div>
                  </div>
                  <div style="display: flex; margin-left: 50px; margin-right: 50px;">
                      <div style="width: 100%; margin-top: 16px; margin-bottom: 57px;">
                          <h1 style="margin-bottom: 4px; font-size: 16px; font-family:bold, sans-serif;">Message:</h1>
                          <textarea type="message" rows="5" cols="30"  style="text-align:start; border: solid; padding-left: 8px; padding-right: 8px; padding-top: 16px; padding-bottom: 16px; border-radius: 8px; font-size: 19px; font-family: unset; width: -webkit-fill-available;" readonly>messageadsfaasdfasfdasdfasdfsafdasdf
                          </textarea>
                      </div>
                  <div>
              </div>
          </body>
      </html>
       
      `;
    let mailerConfig = {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "HonnenTitusv@gmail.com",
            pass: "adonis0129",
        },
    };
    let transporter = nodemailer.createTransport(mailerConfig);
  
    let mailOptions = {
        from: "<HonnenTitusv>@gmail.com>",
        to: "HonnenTitusv@gmail.com",
        subject: "HireCrypto.com",
        text: "Contact Us",
        html: htmlEmail,
    };
  
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log("error:", err);
            res
            .status(500)
            .send({ status: "FAIL", msg: "Internal error: email not sent" });
        } else {
            console.log("Message sent: %s", info.content);
            console.log("Message URL: %s", nodemailer.getTestMessageUrl);
            res.status(200).json({ status: "OK", msg: "Thank you! Your submission has been received!" });
        }
    });
   });
 
};
