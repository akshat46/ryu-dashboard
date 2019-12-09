import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { Flex, ThemeProvider, Box, Text } from "@chakra-ui/core";
import { FiArrowLeft, FiServer, FiActivity, FiHash, FiClock, FiAlertCircle, FiFlag, FiDatabase, FiGitCommit, FiClipboard } from 'react-icons/fi';
import { FaRuler, FaCookie } from 'react-icons/fa';

export default function Post(props) {
    const router = useRouter();
    
    return (
        <ThemeProvider>
        <Layout>
            <Box d="flex" alignSelf="center">
                <Text
                    color="gray.500"
                    fontWeight="semibold"
                    fontSize="3xl"
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
                        <Text d="inline" fontWeight="normal">Switch</Text> {router.query.id}
                    </Text>
                </Text>
            </Box>

                <Text
                    d="inline"
                    ml={3}
                    color="gray.700"
                    letterSpacing="wide"
                    fontWeight="extrabold"
                    fontSize="xl"
                >
                    <FiActivity/> Flows
                </Text>
                <Flex align="center" direction="row" wrap="wrap" mb={[8]}>
                    {props.flows.map(f => (
                        <Box
                            maxW="sm"
                            borderWidth="5px"
                            borderColor="gray.100"
                            rounded="md"
                            overflow="hidden"
                            boxShadow="md"
                            bg="gray.50"
                            m={[4, 5]}
                            p={6}
                            width={300}
                        >
                            <Flex align="center" direction="row" wrap="wrap">
                                <Box d="flex" alignItems="baseline" mr={[2, 3]}>
                                    <Text
                                        color="gray.500"
                                        fontWeight="semibold"
                                        fontSize="sm"
                                    >
                                        <FiHash /> Table ID:
                                        <Text
                                            d="inline"
                                            ml={3}
                                            color="gray.700"
                                            letterSpacing="wide"
                                            fontSize="md"
                                        >
                                            {f.table_id}
                                        </Text>
                                    </Text>
                                </Box>
                                <Box d="flex" alignItems="baseline" mr={[2, 3]}>
                                    <Text
                                        color="gray.500"
                                        fontWeight="semibold"
                                        fontSize="sm"
                                    >
                                        <FaRuler /> Length:
                                        <Text
                                            d="inline"
                                            ml={3}
                                            color="gray.700"
                                            letterSpacing="wide"
                                            fontSize="md"
                                        >
                                            {f.length}
                                        </Text>
                                    </Text>
                                </Box>
                                <Box d="flex" alignItems="baseline" mr={[2,3]}>
                                    <Text
                                        color="gray.500"
                                        fontWeight="semibold"
                                        fontSize="sm"
                                    >
                                        <FiClock /> Duration Sec:
                                        <Text
                                            d="inline"
                                            ml={3}
                                            color="gray.700"
                                            letterSpacing="wide"
                                            fontSize="md"
                                        >
                                            {f.duration_sec}
                                        </Text>
                                    </Text>
                                </Box>
                                <Box d="flex" alignItems="baseline" mr={[2,3]}>
                                    <Text
                                        color="gray.500"
                                        fontWeight="semibold"
                                        fontSize="sm"
                                    >
                                        <FiClock /> Duration NanoSec:
                                        <Text
                                            d="inline"
                                            ml={3}
                                            color="gray.700"
                                            letterSpacing="wide"
                                            fontSize="md"
                                        >
                                            {f.duration_nsec}
                                        </Text>
                                    </Text>
                                </Box>
                                <Box d="flex" alignItems="baseline" mr={[2,3]}>
                                    <Text
                                        color="gray.500"
                                        fontWeight="semibold"
                                        fontSize="sm"
                                    >
                                        <FiAlertCircle /> Priority:
                                        <Text
                                            d="inline"
                                            ml={3}
                                            color="gray.700"
                                            letterSpacing="wide"
                                            fontSize="md"
                                        >
                                            {f.priority}
                                        </Text>
                                    </Text>
                                </Box>
                                <Box d="flex" alignItems="baseline" mr={[2,3]}>
                                    <Text
                                        color="gray.500"
                                        fontWeight="semibold"
                                        fontSize="sm"
                                    >
                                        <FiFlag /> Flags:
                                        <Text
                                            d="inline"
                                            ml={3}
                                            color="gray.700"
                                            letterSpacing="wide"
                                            fontSize="md"
                                        >
                                            {f.flags}
                                        </Text>
                                    </Text>
                                </Box>
                                <Box d="flex" alignItems="baseline" mr={[2, 3]}>
                                    <Text
                                        color="gray.500"
                                        fontWeight="semibold"
                                        fontSize="sm"
                                    >
                                        <FaCookie /> Cookie:
                                        <Text
                                            d="inline"
                                            ml={3}
                                            color="gray.700"
                                            letterSpacing="wide"
                                            fontSize="md"
                                        >
                                            {f.cookie}
                                        </Text>
                                    </Text>
                                </Box>
                                <Box d="flex" alignItems="baseline" mr={[2, 3]}>
                                    <Text
                                        color="gray.500"
                                        fontWeight="semibold"
                                        fontSize="sm"
                                    >
                                        <FiDatabase /> Packet Count:
                                        <Text
                                            d="inline"
                                            ml={3}
                                            color="gray.700"
                                            letterSpacing="wide"
                                            fontSize="md"
                                        >
                                            {f.packet_count}
                                        </Text>
                                    </Text>
                                </Box>
                                <Box d="flex" alignItems="baseline" mr={[2, 3]}>
                                    <Text
                                        color="gray.500"
                                        fontWeight="semibold"
                                        fontSize="sm"
                                    >
                                        <FiDatabase /> Byte Count:
                                        <Text
                                            d="inline"
                                            ml={3}
                                            color="gray.700"
                                            letterSpacing="wide"
                                            fontSize="md"
                                        >
                                            {f.byte_count}
                                        </Text>
                                    </Text>
                                </Box>
                                <Box d="flex" alignItems="baseline" mr={[2, 3]}>
                                    <Text
                                        color="blue.400"
                                        fontWeight="semibold"
                                        fontSize="sm"
                                    >
                                        <FiDatabase /> Actions:
                                        <Text
                                            d="inline"
                                            ml={3}
                                            color="blue.400"
                                            letterSpacing="wide"
                                            fontSize="md"
                                        >
                                            {f.actions[0]}
                                        </Text>
                                    </Text>
                                </Box>
                                <Box d="flex" alignItems="baseline" mr={[2, 3]} w="100%">
                                    <Text
                                        color="green.400"
                                        fontWeight="semibold"
                                        fontSize="md"
                                    >
                                        <FiClipboard /> Match
                                        
                                        <Box  alignItems="baseline" mr={[2, 3]}>
                                            <Text
                                                color="green.400"
                                                fontWeight="semibold"
                                                fontSize="sm"
                                            >
                                                ARP Sender:
                                                <Text
                                                    d="inline"
                                                    ml={3}
                                                    color="green.400"
                                                    letterSpacing="wide"
                                                    fontSize="md"
                                                >
                                                    {f.match.arp_spa}
                                                </Text>
                                            </Text>
                                            <Text
                                                color="green.400"
                                                fontWeight="semibold"
                                                fontSize="sm"
                                            >
                                                ARP Target:
                                                <Text
                                                    d="inline"
                                                    ml={3}
                                                    color="green.400"
                                                    letterSpacing="wide"
                                                    fontSize="md"
                                                >
                                                    {f.match.arp_tpa}
                                                </Text>
                                            </Text>
                                            <Text
                                                color="green.400"
                                                fontWeight="semibold"
                                                fontSize="sm"
                                            >
                                                Source:
                                                <Text
                                                    d="inline"
                                                    ml={3}
                                                    color="green.400"
                                                    letterSpacing="wide"
                                                    fontSize="md"
                                                >
                                                    {f.match.nw_src}
                                                </Text>
                                            </Text>
                                            <Text
                                                color="green.400"
                                                fontWeight="semibold"
                                                fontSize="sm"
                                            >
                                                Destination:
                                                <Text
                                                    d="inline"
                                                    ml={3}
                                                    color="green.400"
                                                    letterSpacing="wide"
                                                    fontSize="md"
                                                >
                                                    {f.match.nw_dst}
                                                </Text>
                                            </Text>
                                        </Box>
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                    ))}
                </Flex>
                <Text
                    d="inline"
                    ml={3}
                    color="gray.700"
                    letterSpacing="wide"
                    fontWeight="extrabold"
                    mt="40px"
                    fontSize="xl"
                >
                    <FiGitCommit /> Ports
                </Text>
            
        </Layout>
        <style jsx global>{`
            body { 
            background: white;
            }
        `}</style>
        </ThemeProvider>
    );
}

Post.getInitialProps = async ({ query }) => {
    const id = query.id;
    const res = await fetch('http://localhost:8080/stats/flow/'+id);
    const data = await res.json();

    console.log("****", data[id.toString()]);
    return {
        flows: data[id.toString()]
    };
};
