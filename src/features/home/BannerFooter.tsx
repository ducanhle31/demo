import { FormContactBanner } from "@/components/FormContact";
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  GridItem,
  Heading,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import CountUp from "react-countup";
import { BsFillPlayFill } from "react-icons/bs";
interface ICounter {
  start: number;
  end: number;
  subfix: string;
  prefix?: string;
  image?: string;
}
interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="900px" h={"506px"} bg={"#ffffff0"}>
        <AspectRatio maxW="900px" h={"506px"} ratio={1}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/QhBnZ6NPOY0"
            allowFullScreen
          />
        </AspectRatio>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;

const counters = [
  {
    start: 0,
    end: 3,
    suffix: "trường ĐH đạt chuẩn chất lượng giáo dục ",
    prefix: "Top",
    image: "/counter-icon-01.png",
  },
  {
    start: 0,
    end: 1000,
    suffix: "Học viên theo học Hệ từ xa năm 2023 ",
    image: "/counter-icon-02.png",
  },
  {
    start: 0,
    end: 15,
    suffix: "Huân chương cao quý của Đảng và Nhà nước ",
    image: "/counter-icon-03.png",
  },
];

export const Counter = (props: ICounter) => {
  const { start, end, subfix, image, prefix = "+" } = props;

  return (
    <CountUp
      enableScrollSpy={true}
      end={end}
      start={start}
      duration={2}
      suffix={prefix}
      onEnd={() => console.log("Ended! 👏")}
      onStart={() => console.log("Started! 💨")}
    >
      {({ countUpRef }) => (
        <Flex alignItems={"center"} pt={"20px"}>
          <Image w={"48px"} h={"48px"} src={image} alt="Dan Abramov" />
          <Flex
            pl={"15px"}
            justifyContent={"center"}
            flexDir="column"
            alignItems={"flex-start"}
          >
            <span
              style={{
                fontSize: "36px",
                textAlign: "left",
                fontWeight: "600",
                color: "red",
              }}
              ref={countUpRef}
            />

            <Heading fontSize="14px" fontWeight={500} color="red">
              {subfix}
            </Heading>
          </Flex>
        </Flex>
      )}
    </CountUp>
  );
};

export const BannerFooter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box pt={{ base: "250px", md: "0" }} mx={{ base: "0", lg: "55px" }}>
      <Container
        position={"relative"}
        maxW="8xl"
        zIndex={"1"}
        boxShadow="0px 89px 72px 47px rgba(69, 69, 69, 0.75);"
        mt={"-400px"}
        px={{ base: "20px", lg: "128px" }}
        style={{
          clipPath:
            "polygon(8% 0, 100% 0, 100% 43%, 100% 100%, 68% 100%, 32% 100%, 0 100%, 0 19%, 4% 19%)",
        }}
      >
        <SimpleGrid
          pt={"20px"}
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(20, 1fr)" }}
        >
          <GridItem w="100%" colSpan={7} mb={"71px"}>
            <Box display={"flex"}>
              <Divider
                w={"70px"}
                pt={"20px"}
                mr={"20px"}
                borderColor={"#f5750d"}
                style={{ borderBottomWidth: "4px" }}
              />
              <Text
                fontWeight={700}
                textAlign={"left"}
                fontSize={"24px"}
                color={"#00165a"}
              >
                Những con số ấn tượng về Học Viện Tài Chính
              </Text>
            </Box>
            <Text
              textAlign={"left"}
              pt={"20px"}
              lineHeight={"30px"}
              fontSize={"16px"}
              color={"#4d546b"}
            >
              Chọn HỆ TỪ XA Học Viện Tài Chính – Trường đại học TOP ĐẦU đào tạo
              khối ngành kinh tế sẽ là bệ phóng giúp các bạn sinh viên chinh
              phục nhiều cơ hội học tập và việc làm hấp dẫn trong tương lai
            </Text>
            <Box display={"flex"} mt={"40px"}>
              <Button
                w={"50px"}
                h={"50px"}
                color={"#4054B2"}
                borderRadius={"100%"}
                className="arrow-left"
                fontSize={"20px"}
                onClick={onOpen}
                mr={"20px"}
                shadow={"0px 0px 16px 0px rgba(135,135,135,1)"}
              >
                <BsFillPlayFill />
              </Button>
              <Image src="/signature.png" alt="Dan " />
            </Box>
          </GridItem>
          <GridItem
            w="100%"
            colSpan={6}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-evenly"}
            pl={"40px"}
            mt="-65px"
            mb={"40px"}
          >
            {counters?.map((counter, index) => (
              <Counter
                key={index}
                start={counter.start}
                end={counter.end}
                subfix={counter.suffix}
                prefix={counter.prefix}
                image={counter.image}
              />
            ))}
          </GridItem>
          <GridItem mt="-20px" w="100%" colSpan={7}>
            <FormContactBanner />
          </GridItem>
        </SimpleGrid>
      </Container>
      <ModalComponent isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
