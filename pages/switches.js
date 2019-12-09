import Header from '../components/Header';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Flex, ThemeProvider, Box, Text } from "@chakra-ui/core";
import { FiUmbrella, FiCpu, FiCode, FiHash, FiArrowUpCircle, FiArrowUpRight, FiServer, FiInfo } from 'react-icons/fi';
import Layout from '../components/Layout';

const PostLink = props => (
    <Link href="/switch/[id]" as={`/switch/${props.id}`}>
        <a><FiInfo /></a>
    </Link>
);


const Switches = props => (
    <ThemeProvider>
        <Layout>
        <Header active={["1.2", "0.90"]} />
        <Flex align="center" direction="row" wrap="wrap">
        {props.switches.map(s => (
            <Box 
                maxW="sm" 
                borderWidth="5px" 
                borderColor="gray.100"
                rounded="md" 
                overflow="hidden" 
                boxShadow="lg" 
                bg="gray.50" 
                m={[4,5]}
                p={6}
                width={300}
                >
                <Box d="flex" alignItems="baseline" onClick={() => console.log()}>
                    <Text
                        color="gray.500"
                        fontWeight="semibold"
                        fontSize="lg"
                    >
                        <FiServer />
                    <Text
                            d="inline"
                            ml={3}
                            color="gray.700"
                            letterSpacing="wide"
                            fontWeight="extrabold"
                            fontSize="3xl"
                        >
                            <Text d="inline" fontWeight="normal"
                                fontSize="md">Switch</Text> {s.id}
                        </Text>
                    </Text>
                </Box>
                
                <Box d="flex" alignItems="baseline">
                    <Text
                        color="gray.500"
                        fontWeight="semibold"
                        fontSize="sm"
                    >
                        <FiUmbrella /> Manufacturer:
                    <Text
                        d="inline"
                        ml={3}
                        color="gray.700"
                        letterSpacing="wide"
                        fontSize="md"
                    >
                        {s.mfr_desc}
                    </Text>
                    </Text>
                </Box>


                <Box d="flex" alignItems="baseline">
                    <Text
                        color="gray.500"
                        fontWeight="semibold"
                        fontSize="sm"
                    >
                        <FiCpu /> Hardware:
                    <Text
                            d="inline"
                            ml={3}
                            color="gray.700"
                            letterSpacing="wide"
                            fontSize="md"
                        >
                            {s.hw_desc}
                        </Text>
                    </Text>
                </Box>
                <Box d="flex" alignItems="baseline">
                    <Text
                        color="gray.500"
                        fontWeight="semibold"
                        fontSize="sm"
                    >
                        <FiCode /> Software:
                    <Text
                            d="inline"
                            ml={3}
                            color="gray.700"
                            letterSpacing="wide"
                            fontSize="md"
                        >
                            {s.sw_desc}
                        </Text>
                    </Text>
                </Box>
                <Box d="flex" alignItems="baseline">
                    <Text
                        color="gray.500"
                        fontWeight="semibold"
                        fontSize="sm"
                    >
                        <FiHash /> Serial Number:
                    <Text
                            d="inline"
                            ml={3}
                            color="gray.700"
                            letterSpacing="wide"
                            fontSize="md"
                        >
                            {s.serial_num}
                        </Text>
                    </Text>
                </Box>
                <Box d="flex" alignItems="baseline">
                    <Text
                        color="gray.500"
                        fontWeight="semibold"
                        fontSize="sm"
                    >
                        <FiArrowUpRight /> Datapath:
                    <Text
                            d="inline"
                            ml={3}
                            color="gray.700"
                            letterSpacing="wide"
                            fontSize="md"
                        >
                            {s.dp_desc}
                        </Text>
                    </Text>
                </Box>
                <Flex justify="right" cursor="pointer" color="blue.400" fontSize="2xl">
                    <PostLink id={s.id}/>
                </Flex>
            </Box>
        ))}
        </Flex>
        <style jsx global>{`
            body { 
            background: white;
            }
        `}</style>
        </Layout>
    </ThemeProvider>
);

Switches.getInitialProps = async function () {
    const res = await fetch('http://127.0.0.1:8080/stats/switches');
    const data = await res.json();
    var switches = [];

    for (var i = 0; i < data.length; i++) {
        var res_temp = await fetch('http://127.0.0.1:8080/stats/desc/' + data[i]);
        var switchdata = await res_temp.json();
        switchdata[data[i].toString()]["id"] = data[i];
        switches.push(switchdata[data[i].toString()]);
    }

    console.log("****",switches);
    return {
        switches: switches
    };
};

export default Switches;