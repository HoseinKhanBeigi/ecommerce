// export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, res, ...etc }) => {
//   console.log(etc.params);

//   // await store.dispatch(fetchTestPhotos(1));
//   return {
//     props: {
//       data: "",
//     },
//   };
// });

export const test = "";

// import { wrapper, AppDispatch, RootState } from "../store/store";
// import { getAllPhotos, fetchTestPhotos } from "../store/actions/photos";
// import { useAppSelector, useAppDispatch } from "../hooks";
// import type { ReactElement } from "react";
// import { PrimaryLayout } from "../components/PrimaryLayout";
// const Test = () => {
//     const { entities, status, error } = useAppSelector((state) => state.photo);
//     return (
//         <div>
//             {entities.map((el: any, i) => {
//                 return <img key={i} src={el.urls.thumb} />;
//             })}
//         </div>
//     );
// };

// Test.getLayout = (page: ReactElement) => {
//     return <PrimaryLayout>{page}</PrimaryLayout>;
// };
// // export const getServerSideProps = wrapper.getServerSideProps(
// //     (store) =>
// //         async ({ req, res, ...etc }) => {
// //             const { ids }: any = etc.params;
// //             await store.dispatch(fetchTestPhotos(Number(ids)));
// //             return {
// //                 props: {
// //                     data: "",
// //                 },
// //             };
// //         }
// // );
// export default Test;
