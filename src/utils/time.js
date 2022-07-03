export const convertDate = (date) => {
  date = new Date(date);
  let ms = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  let day = date.getDate();
  let month = ms[date.getMonth()];
  let year = date.getFullYear();
  return `${year}-${month}-${day}`;
};
export const convertTime = (date) => {
  date = new Date(date);
  let hour = date.getHours();
  let minute = date.getMinutes();
  let suffix = hour >= 12 ? "PM" : "AM";
  date.getHours() >= 12 && (hour = ((hour + 11) % 12) + 1);
  hour.toString().length < 2 && (hour = `0${hour}`);
  minute.toString().length < 2 && (minute = `0${minute}`);

  return `${hour}:${minute}${suffix}`;
};

// export const date = {
//   convertDate: (date) => {
//     date = new Date(date);
//     let ms = [
//       "01",
//       "02",
//       "03",
//       "04",
//       "05",
//       "06",
//       "07",
//       "08",
//       "09",
//       "10",
//       "11",
//       "12",
//     ];

//     //  var ms = [
//     //    "January",
//     //    "February",
//     //    "March",
//     //    "April",
//     //    "May",
//     //    "June",
//     //    "July",
//     //    "August",
//     //    "September",
//     //    "October",
//     //    "November",
//     //    "December",
//     //  ];

//     let day = date.getDate();
//     let month = ms[date.getMonth()];
//     let year = date.getFullYear();
//     return `${year}-${month}-${day}`;
//   },
// };
// export const time = {
//   convertTime: (date) => {
//     date = new Date(date);
//     let hour = date.getHours();
//     let minute = date.getMinutes();
//     let suffix = hour >= 12 ? "PM" : "AM";
//     date.getHours() >= 12 && (hour = ((hour + 11) % 12) + 1);
//     hour.toString().length < 2 && (hour = `0${hour}`);
//     minute.toString().length < 2 && (minute = `0${minute}`);

//     return `${hour}:${minute}${suffix}`;
//   },
// };
