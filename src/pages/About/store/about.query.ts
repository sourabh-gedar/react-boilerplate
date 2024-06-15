// import { blogApiSlice } from "@rtk";
import { blogApiSlice } from "../../../rtk";
import { queries } from "./about.api";

const aboutUsApiEnhancedSlice = blogApiSlice.enhanceEndpoints({});

const aboutUsUserApi = aboutUsApiEnhancedSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<[], void>({
      query: () => queries.getUser.query(),
    }),
  }),
  overrideExisting: true,
});

export const {
useGetUserQuery
} = aboutUsUserApi;

export default aboutUsUserApi;
