import { Flex } from "@chakra-ui/layout";
import { UserDataType } from "../../types/userData";
import PassangerCard from "./passangerCard";

function AirlineTable({ data }: { data: UserDataType[] }) {
  return (
    <Flex mx={[3]} wrap="wrap" justifyContent="space-around">
      {data.map((single) => {
        return <PassangerCard key={single._id} user={single} />;
      })}
    </Flex>
  );
}

export default AirlineTable;
