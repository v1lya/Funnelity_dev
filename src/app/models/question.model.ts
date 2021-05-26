export interface Question {
  value: string | number;
  viewValue: string | number;
}

// export interface HousingStatus {
//   value: string;
//   viewValue: string;
// }
//
// export interface YearOfBirth {
//     value: number;
//     viewValue: number;
// }
//
// export interface Gender {
//   value: string;
//   viewValue: string;
// }
//
// export interface Questions extends HousingStatus, YearOfBirth, Gender {
// }
//
// export interface Questions<Type> {
//   contents: Type;
// }
// interface HousingStatus {
//   contents: {HousingStatus: {
//     value: string;
//     viewValue: string;
//   }
//   };
// }
//
// interface YearOfBirth {
//   contents: {YearOfBirth: {
//     value: number;
//     viewValue: number;
//   }
//   };
// }
//
// interface Gender {
//   contents: {Gender: {
//     value: string;
//     viewValue: string;
//   }
//   };
// }
