import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Router from "next/router";
import { Container, Heading, Stack, Text } from "@chakra-ui/layout";

import Layout from "../../src/layouts/layout";
import AirlineTable from "../../src/components/dashboard/airlineTable";
import { ApiResponseType, UserDataType } from "../../src/types/userData";
import LoadingSpinner from "../../src/components/loadingSpinner";
import PaginationWrapper from "../../src/hoc/PaginationWrapper";
import { useFireBaseAuth } from "../../src/context/firebaseContext";
import { toastActions } from "../../src/components/toast";

function dashboard() {
  const { authUser: user, loading } = useFireBaseAuth();

  useEffect(() => {
    if (!user && !loading) {
      toastActions.error("Please Login");
      Router.push("/");
    }
  }, [user]);

  const [userData, setUserData] = useState<UserDataType[]>([]);
  const [loadingData, setLoadingData] = useState<Boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    getUsersData({ page: 0 });
  }, []);

  const getUsersData = async ({ page }: { page: number }) => {
    setLoadingData(true);
    const res = await fetch(
      `https://api.instantwebtools.net/v1/passenger?page=${page}&size=12`
    );
    const data: ApiResponseType = await res.json();
    setUserData(data.data);
    setTotalPages(data.totalPages);
    setLoadingData(false);
  };

  return (
    <Layout title="Dashboard">
      {loadingData && <LoadingSpinner />}
      <Stack
        spacing={4}
        as={Container}
        my={4}
        maxW={"3xl"}
        textAlign={"center"}
      >
        <Heading fontSize={"3xl"}>Passengers Data</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Text>
      </Stack>
      <PaginationWrapper
        onPageChange={({ selected }) => {
          getUsersData({ page: selected });
        }}
        pageCount={totalPages}
      >
        <AirlineTable data={userData} />
      </PaginationWrapper>
    </Layout>
  );
}

export default dashboard;
