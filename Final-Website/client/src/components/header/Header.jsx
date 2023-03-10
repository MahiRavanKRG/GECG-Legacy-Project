import React, { useState } from "react";
import "./header.css";

function Header({
  setsubmitCorrectInformation,
  handleChange,
  profileActive,
  setProfileActive,
  activeToggle,
  setActiveToggle
}) {
  const [clickedOnSearch, setClickedOnSearch] = useState(false);
  
  return (
    <>
      <header className="header">
        {/* Header Logo */}
        <div className="header-logo">
          <h1>GLP-Community</h1>
        </div>
        <div className="header-links">
          {/* Search Logo */}
          <span className="flex-center">
            <input
              type="search"
              name="search"
              id="search"
              className={`searchbar ${
                clickedOnSearch ? "clicked-on-search" : ""
              }`}
              onChange={handleChange}
            />
            <svg
              id="search-logo"
              onClick={() => {
                setClickedOnSearch(!clickedOnSearch);
              }}
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 60 60"
              viewBox="0 0 60 60"
            >
              <path d="M19.6442413 11.9022827c-1.7402344.659668-3.3178711 1.6845703-4.6933594 3.0493164-3.1977539 3.2080078-4.5708008 7.7851563-3.6728516 12.2431641.0957031.4750977.5131836.8027344.9794922.8027344.0654297 0 .1318359-.0063477.1982422-.0195313.5415039-.109375.8920898-.6367188.7832031-1.1777344-.7661133-3.8017578.4033203-7.703125 3.1245117-10.4326172 1.1713867-1.1625977 2.5136719-2.0356445 3.9897461-2.5952148.5166016-.1958008.7763672-.7729492.5805664-1.2895508C20.7384796 11.9662476 20.1603546 11.7064819 19.6442413 11.9022827zM24.3786163 11.0072632c-.1132813 0-.2446289.0053711-.3583984.0244141-.5444336.0932617-.9282227.6118164-.8354492 1.15625.0834961.487793.4926758.8344727.9682617.8344727.0551758 0 .1113281-.0048828.1679688-.0146484l.0576172-.0004883c.5522461 0 1-.4477539 1-1S24.9308624 11.0072632 24.3786163 11.0072632z" />
              <path d="M40.8887482 33.1474609c1.3900146-2.6300049 2.1400146-5.5700073 2.1400146-8.6399536 0-4.9400024-1.9300537-9.5900269-5.4200439-13.0900269-7.2199707-7.2199707-18.9699707-7.2199707-26.1900024 0-7.2199707 7.2200317-7.2199707 18.9700317 0 26.1900024 3.6100464 3.6099854 8.3500366 5.4099731 13.0900269 5.4099731 2.9799805 0 5.9500122-.7099609 8.6499634-2.1299438L41.4587555 49.1875l7.7299805-7.7399902L40.8887482 33.1474609zM12.8387604 36.1875c-6.4400024-6.4400024-6.4400024-16.9100342 0-23.3500366 3.2199707-3.2199707 7.4400024-4.8299561 11.6699829-4.8299561s8.4599609 1.6099854 11.6799927 4.8299561c3.1199951 3.1100464 4.8400269 7.2600098 4.8400269 11.6700439 0 4.4199829-1.7200317 8.5699463-4.8400269 11.6799927C29.7487335 42.6275024 19.2787628 42.6275024 12.8387604 36.1875zM52.3987579 44.6574707l-1.8000488-1.7999878-7.7299805 7.7399902 1.7999878 1.7999878c1.0599976 1.0599976 2.460022 1.6000366 3.8600464 1.6000366 1.3999634 0 2.7999878-.5400391 3.8699951-1.6000366C54.5287628 50.2674561 54.5287628 46.7874756 52.3987579 44.6574707z" />
            </svg>
          </span>
          {/* Setting Logo */}
          <span className="flex-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              onClick={() => {
                setProfileActive(!profileActive);
              }}
            >
              <path
                fill="#fff"
                d="M0.873095197,5.16335138 C1.07736478,5.12378632 1.28935874,5.16536248 1.46214576,5.27887571 C1.80346964,5.50552363 1.90243476,5.95394091 1.68701228,6.29776021 L1.68701228,6.29776021 L1.63049727,6.40886656 C1.41692137,6.89799239 1.60769048,7.47656916 2.09177201,7.74703557 C2.4834486,7.98141148 2.80584873,8.31137851 3.02721671,8.70443566 C3.71653222,9.94093426 3.28873846,11.4881571 2.05579336,12.2178305 C1.5344748,12.509102 1.35332921,13.1577086 1.65103364,13.6671058 L1.65103364,13.6671058 L2.27166522,14.7123408 C2.41288109,14.9614196 2.65203322,15.1434682 2.93385106,15.2164131 C3.2156689,15.2893581 3.51576316,15.2468866 3.76477889,15.0988142 C4.16629362,14.8713997 4.62284123,14.7531186 5.086994,14.7562582 C6.57727817,14.7562582 7.7853922,15.9360086 7.7853922,17.3913043 C7.79033116,17.9796916 8.28018723,18.454126 8.88274079,18.4541063 L8.88274079,18.4541063 L8.87374613,18.4716733 C9.15331914,18.4716732 9.41165527,18.617322 9.55144177,18.8537549 C9.69122828,19.0901879 9.69122828,19.3814853 9.55144177,19.6179183 C9.41165527,19.8543513 9.15331914,20 8.87374613,20 C7.38346196,20 6.17534794,18.8202497 6.17534794,17.3649539 C6.17777146,17.1797208 6.12798477,16.9974041 6.03143337,16.8379447 C5.72964011,16.3277527 5.06266326,16.1511907 4.5383197,16.4426877 L4.5383197,16.4426877 L4.37846769,16.5211696 C3.14151143,17.0796422 1.65653771,16.647903 0.940455444,15.4940711 L0.940455444,15.4940711 L0.328818521,14.4488362 C-0.360496985,13.2123376 0.0672967775,11.6651148 1.30024187,10.9354414 C1.46365758,10.8415595 1.59986794,10.708547 1.69600694,10.5489679 C1.8763988,10.3034349 1.94122763,9.99452277 1.87427955,9.69949129 C1.80733148,9.40445982 1.61493722,9.15120776 1.34521517,9.00307422 L1.34521517,9.00307422 L1.1953131,8.90768859 C0.0785600264,8.14500505 -0.286802202,6.67465723 0.373791824,5.4896794 L0.373791824,5.4896794 L0.450399681,5.39452047 C0.561991749,5.27649703 0.709679528,5.19500342 0.873095197,5.16335138 Z M17.001622,7.70191857 C17.3561623,7.5776619 17.7596901,7.71242785 17.9583534,8.03689065 C18.1782389,8.39845653 18.057649,8.86556614 17.6885136,9.0821256 C17.5250979,9.17600748 17.3888875,9.30901995 17.2927485,9.46859903 C17.1461723,9.71295723 17.1055255,10.0043354 17.1798277,10.2780759 C17.2541299,10.5518165 17.4372357,10.7852791 17.6885136,10.9266579 C18.9613109,11.6716815 19.3792149,13.2805084 18.6239583,14.5278876 L18.6239583,14.5278876 L18.0123214,15.5731225 L17.9146425,15.7195053 C17.1336224,16.8100396 15.6279243,17.166824 14.4144571,16.5217391 C14.0779771,16.3233633 13.6576674,16.3192826 13.3172148,16.5110862 C12.9767623,16.7028897 12.7699918,17.0602538 12.7774289,17.4440053 C12.7343665,17.8367986 12.3949315,18.1346728 11.990396,18.1346728 C11.5858606,18.1346728 11.2464256,17.8367986 11.2033632,17.4440053 C11.2226877,16.5230894 11.7330478,15.6788723 12.5494071,15.217434 C13.3657664,14.7559956 14.3696134,14.7443234 15.1969926,15.1866491 C15.4455875,15.3326398 15.7442164,15.3738466 16.0245013,15.3008344 C16.3042857,15.2242105 16.542826,15.0447838 16.6901062,14.8001757 L16.6901062,14.8001757 L17.3017432,13.7549407 C17.4479092,13.5119249 17.4883234,13.2218682 17.4139597,12.9495514 C17.339596,12.6772345 17.1566491,12.4453424 16.9059781,12.3056653 C16.4844845,12.0548529 16.1445142,11.6924066 15.9255601,11.2604304 C15.2362446,10.0239318 15.6640383,8.47670896 16.8969834,7.74703557 L16.8969834,7.74703557 Z M9.49437772,6.70178889 C10.3905098,6.69946703 11.2507575,7.04546173 11.885264,7.6634236 C12.5197705,8.28138546 12.8763822,9.12051219 12.8763822,9.99560826 L12.8763822,9.99560826 L12.8707845,10.1950507 C12.7967374,11.4511365 11.9951527,12.5648103 10.7948548,13.0530599 C9.53138337,13.5670069 8.07525531,13.2866234 7.10614636,12.3427838 C6.13703741,11.3989442 5.84603609,9.97775434 6.36897286,8.74258193 C6.89190962,7.50740952 8.125672,6.70178889 9.49437772,6.70178889 Z M9.49437772,8.24769433 C8.50085494,8.24769433 7.69544559,9.03419455 7.69544559,10.0043917 C7.69544559,10.9745889 8.50085494,11.7610892 9.49437772,11.7610892 C10.4879005,11.7610892 11.2933098,10.9745889 11.2933098,10.0043917 L11.2933098,10.0043917 L11.2873464,9.86031524 C11.2122986,8.95751078 10.4382244,8.24769433 9.49437772,8.24769433 Z M10.1150093,-1.44328993e-13 C11.6052935,-1.44328993e-13 12.8134075,1.17975033 12.8134075,2.63504611 C12.810984,2.82027917 12.8607707,3.00259594 12.9573221,3.16205534 C13.1005848,3.4089241 13.3389912,3.58959879 13.6194445,3.66384036 C13.8998978,3.73808193 14.1991078,3.699725 14.4504357,3.55731225 C15.7166624,2.88418026 17.3010837,3.30193043 18.0483,4.50592885 C18.2548102,4.87335233 18.1278399,5.33443771 17.7604709,5.55116381 C17.3871594,5.75928058 16.9119889,5.6384028 16.6901062,5.27887571 L16.6901062,5.27887571 L16.6194327,5.1754002 C16.2908071,4.74960935 15.6817056,4.62034539 15.1969926,4.89240228 C14.3710046,5.3340714 13.3689751,5.32328725 12.553156,4.86394851 C11.7373368,4.40460977 11.2257575,3.56317174 11.2033632,2.6438296 C11.2131151,2.35592011 11.1027692,2.07647732 10.8975968,1.8694985 C10.6924243,1.66251968 10.4100019,1.54573627 10.1150093,1.54589372 L10.1150093,1.54589372 L8.88274079,1.54589372 C8.58696967,1.54580638 8.30368621,1.6623152 8.09709986,1.86901212 C7.8905135,2.07570904 7.77811912,2.35508982 7.7853922,2.6438296 C7.77705279,3.5681803 7.26506951,4.4181882 6.44181545,4.87447051 C5.61856138,5.33075283 4.6087325,5.32419777 3.79176287,4.85726834 L3.79176287,4.85726834 L3.75578423,4.82213439 L3.66924268,4.76137496 C3.37175784,4.52112323 3.29446603,4.09717449 3.50393374,3.76811595 C3.73244398,3.409143 4.21568958,3.29903296 4.58329301,3.5221783 C4.74737874,3.61567616 4.93305,3.66704793 5.12297264,3.67149758 C5.41407245,3.68338695 5.69806446,3.58174102 5.91234656,3.38896624 C6.12662867,3.19619145 6.2536083,2.92811463 6.26529455,2.6438296 C6.2597607,1.21544702 7.42066447,0.0428415621 8.88274079,-1.44328993e-13 L8.88274079,-1.44328993e-13 Z"
                transform="translate(2.5 2)"
              />
            </svg>
          </span>
          {/* Notification Logo */}
          <span className="flex-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M10.1405897,17.5694629 C10.4180311,17.32187 10.8438152,17.306518 11.140035,17.5494941 C11.4658769,17.8167678 11.5115565,18.2954075 11.2420632,18.6185658 C10.5777028,19.4801758 9.54987935,19.989855 8.45625097,20 L8.45625097,20 L8.23912504,19.9908542 C7.23082501,19.9176829 6.2975965,19.4204774 5.67931074,18.6185658 L5.67931074,18.6185658 L5.61360047,18.5268524 C5.42043825,18.2101289 5.48511904,17.7924702 5.78133891,17.5494941 C6.10718078,17.2822203 6.58979525,17.3275237 6.85928854,17.6506819 C6.97764172,17.807587 7.11806508,17.9468539 7.27627317,18.0642323 C7.69914856,18.37647 8.23018908,18.5084076 8.75154604,18.4307656 C9.272903,18.3531235 9.74145234,18.0723239 10.0532134,17.6506819 L10.0532134,17.6506819 L10.0620854,17.6506819 Z M8.46512298,-4.79616347e-14 C11.5348397,-4.79616347e-14 14.9771809,2.16454026 15.3675495,5.64012319 L15.3675495,5.64012319 L15.3675495,7.45270568 C15.5008238,8.10690808 15.8070074,8.7142317 16.2547509,9.2124945 C16.2812788,9.24258861 16.3050326,9.27498109 16.325727,9.30928289 C16.7316898,9.92038415 16.9645715,10.62847 17,11.3594369 L17,11.3594369 L16.973384,11.5442147 C17.0039701,12.5445164 16.6701014,13.5222546 16.0329505,14.2982842 C15.2192877,15.1762511 14.1069384,15.724711 12.9100018,15.8380994 C9.96166621,16.1617418 6.98632378,16.1617418 4.03798823,15.8380994 C2.85854477,15.7169871 1.76556768,15.1687337 0.968271552,14.2982842 C0.32061592,13.5333882 -0.0232529078,12.5603384 0.00122207695,11.5618126 L0.00122207695,11.5618126 L0.00122207695,11.4386274 C0.0499997173,10.6857871 0.301205421,9.95964452 0.728727186,9.33567972 L0.728727186,9.33567972 L0.799703295,9.24769028 C1.24431614,8.74732875 1.550059,8.1408792 1.68690465,7.48790145 L1.68690465,7.48790145 L1.68690465,5.67531896 L1.73596444,5.57406421 C1.88512364,5.31699255 2.17563111,5.16663879 2.47988876,5.19955716 C2.82217862,5.23659034 3.09704701,5.4964 3.15078688,5.83369996 L3.15078688,5.83369996 L3.15078688,7.64628245 C3.15423731,7.6784545 3.15423731,7.71089878 3.15078688,7.74307083 C2.96605585,8.65082423 2.5438164,9.49441706 1.92644901,10.1891773 C1.68869608,10.5647756 1.55412081,10.9955098 1.53608042,11.4386274 L1.53608042,11.4386274 L1.53608042,11.6322041 C1.5163842,12.2554331 1.72432594,12.8647465 2.12163331,13.3479982 C2.67246619,13.9122665 3.40906548,14.2619232 4.19768448,14.33348 C7.05196634,14.641453 9.93151171,14.641453 12.7857936,14.33348 C13.5959515,14.2597331 14.3505573,13.893366 14.9062048,13.3040035 C15.2840021,12.832157 15.4819205,12.2432918 15.4651417,11.6410031 L15.4651417,11.6410031 L15.4651417,11.4386274 C15.4469401,10.9940255 15.3157095,10.5612015 15.0836451,10.1803784 C14.4405839,9.49350507 13.9935016,8.64922252 13.7883311,7.73427189 C13.7848807,7.70209983 13.7848807,7.66965556 13.7883311,7.6374835 L13.7883311,7.6374835 L13.7883311,5.81610207 C13.5310427,3.15882094 10.8605666,1.51341839 8.53609909,1.51341839 C7.54785763,1.51116468 6.57587086,1.76276992 5.71479879,2.24373075 L5.71479879,2.24373075 L5.60933557,2.2960794 C5.3925253,2.38362843 5.14447476,2.36825807 4.93831291,2.24943144 C4.69779074,2.11080037 4.55240903,1.8533283 4.55890889,1.57750418 C4.56540876,1.30168007 4.72275991,1.05122495 4.96954965,0.923889133 C6.03654057,0.326071387 7.23966405,0.00808271832 8.46512298,-4.79616347e-14 Z"
                transform="translate(3.5 2)"
              />
            </svg>
          </span>
          {/* Sign out Logo  */}
          <span className="flex-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              viewBox="0 0 24 24"
            >
              <path
                d="M17,2H7C5.3,2,4,3.3,4,5v6h8.6l-2.3-2.3c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l4,4c0.4,0.4,0.4,1,0,1.4c0,0,0,0,0,0
	l-4,4c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l2.3-2.3H4v6c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3V5C20,3.3,18.7,2,17,2z"
                onClick={() => {
                  setsubmitCorrectInformation(false);
                }}
              />
            </svg>
          </span>
          {/* Toggle Bar */}
          <span className="flex-center toggle" id="mobile-menu" onClick={() => setActiveToggle(!activeToggle)}>
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <g>
                <path
                  d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"
                  className="style-scope yt-icon"
                ></path>
              </g>
            </svg>
          </span>
        </div>
      </header>
    </>
  );
}

export default Header;
