import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl =
  import.meta.env.MODE === "development" ? "http://localhost:8080/api" : "/api";

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    headers.set("authorization", `Bearer ${localStorage.getItem("ipharm")}`);
    headers.set("credentials", "include");
    return headers;
  },
  credentials: "include",
});
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: [
    "user",
    "banner",
    "products",
    "cart",
    "order",
    "address",
    "orders",
    "wishlist"
  ],
  endpoints: (builder) => ({
    sendOtp: builder.mutation({
      query: (data) => ({
        url: "/send-otp",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    resendOtp:builder.mutation({
      query: () => ({
        url: "/resend-otp",
        method: "POST",
        // body: data,
      }),
      invalidatesTags: ["user"],
    }),
    forgotPassword:builder.mutation({
      query: (data) => ({
        url: "/forgot-password",
        method: "POST",
        body: data,
      }),
    }),
    otpVerify: builder.mutation({
      query: (data) => ({
        url: "/verify-otp",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    userGoogleLogin: builder.mutation({
      query: (data) => ({
        url: "/googleRegister",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    getUserDetails: builder.query({
      query: () => "/getUserData",
      providesTags: ["user"],
      headers: { Authorization: `Bearer ${localStorage.getItem("tokToken")}` },
    }),
    editUserData: builder.mutation({
      query: (data) => ({
        url: "/edit-user-data",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    getBanner: builder.query({
      query: (key) => `/get-banner/${key}`,
      providesTags: ["banner"],
    }),
    getproducts: builder.query({
      query: (page) => `/get-products/${page}`,
      providesTags: ["products"],
    }),
    getFilteredProducts: builder.query({
      query: (url) => `/get-filtered-products/${url}`,
      providesTags: ["products"],
    }),
    getproductAttributes: builder.query({
      query: () => "/get-product-attributes",
    }),
    getProductDetails: builder.query({
      query: (id) => `/product-details/${id}`,
      providesTags: ["products"],
    }),
    addToCart: builder.mutation({
      query: (data) => ({
        url: "/add-to-cart",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user", "cart"],
    }),
    getCartDetails: builder.mutation({
      query: (data) => ({
        url: "/get-cart-details",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["cart"],
    }),
    getStock: builder.mutation({
      query: (id) => ({
        url: `/get-variant-stock/${id}`,
        method: "GET",
      }),
    }),
    addAddress: builder.mutation({
      query: (data) => ({
        url: "/add-address",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["address"],
    }),
    fetchUserAddress: builder.query({
      query: () => "/fetch-address",
      providesTags: ["address"],
    }),
    fetchOrderDetails: builder.query({
      query: (id) => `/order-details/${id}`,
      providesTags: ["order"],
    }),
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/order-create-checkout",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["order"],
    }),
    applyCoupon: builder.mutation({
      query: (code) => ({
        url: `/apply-coupon/${code}`,
        method: "GET",
      }),
    }),
    confirmAddress: builder.mutation({
      query: (data) => ({
        url: "/confirm-address",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["orders", "order"],
    }),
    fetchOrders: builder.query({
      query: () => `/fetch-orders`,
      providesTags: ["orders"],
    }),
    addTowishlist: builder.mutation({
      query: (data) => ({
        url: "/add-to-wishlist",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user","wishlist"],
    }),
    getWishList:builder.query({
      query: () => `/get-wishlist`,
      providesTags: ["wishlist"],
    }),
    fetchOrderSummary: builder.query({
      query: (id) => `/order-summary/${id}`,
      providesTags: ["order"],
    }),
  }),
});

export const {
  useGetUserDetailsQuery,
  useUserLoginMutation,
  useUserGoogleLoginMutation,
  useSendOtpMutation,
  useOtpVerifyMutation,
  useGetBannerQuery,
  useGetproductsQuery,
  useGetProductDetailsQuery,
  useAddToCartMutation,
  useGetCartDetailsMutation,
  useGetStockMutation,
  useCreateOrderMutation,
  useFetchOrderDetailsQuery,
  useAddAddressMutation,
  useFetchUserAddressQuery,
  useGetproductAttributesQuery,
  useGetFilteredProductsQuery,
  useEditUserDataMutation,
  useApplyCouponMutation,
  useFetchOrdersQuery,
  useConfirmAddressMutation,
  useAddTowishlistMutation,
  useGetWishListQuery,
  useFetchOrderSummaryQuery,
  useResendOtpMutation,
  useForgotPasswordMutation
} = apiSlice;