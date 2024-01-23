import { Heading, Text, Box } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Box padding={5}>
        <Heading>Oops....</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This Page Doesn't exists"
            : "An Unexpected Has Been Occurred"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
