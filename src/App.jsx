import {useState, useEffect} from "react"
import {v4 as uuidv4} from "uuid"
import {
  Flex,
  VStack,
  Input,
  Button,
  Image,
  Text,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"

const initRegalos = [
  {id: uuidv4(), name: "Medias", img: "https://picsum.photos/100", count: 1},
  {id: uuidv4(), name: "caramelos", img: "https://picsum.photos/100", count: 2},
  {id: uuidv4(), name: "Vitel Tone", img: "https://picsum.photos/100", count: 3},
]

function App() {
  const [regalos, setRegalos] = useState([])
  const [newRegalo, setNewRegalo] = useState("")
  const [newImg, setNewImg] = useState("")
  const [error, setError] = useState("")
  const [newRegaloCount, setNewRegaloCount] = useState(1)

  useEffect(() => {
    setRegalos(
      localStorage.getItem("regalos") ? JSON.parse(localStorage.getItem("regalos")) : initRegalos,
    )
  }, [])

  useEffect(() => {
    localStorage.setItem("regalos", JSON.stringify(regalos))
  }, [regalos])

  const vaidate = () => {
    if (newRegalo.trim().length === 0) {
      setError("El nombre del regalo no puede estar vacio")
      setNewRegalo("")

      return false
    }
    if (newImg.trim().length === 0) {
      setError("La imagen del regalo no puede estar vacio")
      setNewImg("")

      return false
    }

    setNewRegalo("")
    setNewImg("")
    setError("")
    setNewRegaloCount(1)

    return true
  }
  const handlerAddRegalo = (e) => {
    e.preventDefault()
    if (vaidate()) {
      setRegalos([
        ...regalos,
        {id: uuidv4(), name: newRegalo.trim(), img: newImg.trim(), count: newRegaloCount},
      ])
    }
  }
  const handlerClear = () => {
    setRegalos([])
    setNewRegalo("")
    setNewImg("")
    setError("")
    setNewRegaloCount(1)
  }
  const handlerDelete = (id) => {
    const newRegalos = regalos.filter((regalo) => regalo.id !== id)

    setRegalos(newRegalos)
    setNewRegalo("")
    setNewImg("")
    setError("")
    setNewRegaloCount(1)
  }
  const renderRegalos = () =>
    regalos.map(({id, img, count, name}) => (
      <Flex key={id} alignItems="center" justifyContent="space-between" w="100%">
        <Image
          alt={name}
          boxSize="100px"
          fallbackSrc="https://via.placeholder.com/100"
          objectFit="cover"
          src={img}
          w="100px"
        />
        <Text>{name}</Text>
        <Text>{count}</Text>
        <Button colorScheme="red" size="xs" onClick={() => handlerDelete(id)}>
          x
        </Button>
      </Flex>
    ))

  return (
    <Flex alignItems="center" justifyContent="center" minH="100vh" w="100%">
      <VStack background="white" boxShadow="md" p={4} w="34%">
        <Heading fontFamily="'Mountains of Christmas'">Regalos:</Heading>
        <Flex as="form" gap={2} onSubmit={handlerAddRegalo}>
          <Input
            placeholder="Regalo"
            value={newRegalo}
            onChange={(e) => setNewRegalo(e.target.value)}
          />
          <Input
            placeholder="http://imagen"
            value={newImg}
            onChange={(e) => setNewImg(e.target.value)}
          />
          <NumberInput
            defaultValue={1}
            max={99}
            min={1}
            value={newRegaloCount}
            onChange={(countString) => setNewRegaloCount(Number(countString))}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button colorScheme="red" type="submit">
            Add
          </Button>
        </Flex>
        <Text color="red"> {error}</Text>
        <VStack w="100%">
          {regalos.length !== 0 ? (
            renderRegalos()
          ) : (
            <Text color="gray.400">No hay regalos Grinch!! , agrega uno</Text>
          )}
        </VStack>
        {regalos.length !== 0 && (
          <Button colorScheme="red" w="100%" onClick={handlerClear}>
            Borrar todo
          </Button>
        )}
      </VStack>
    </Flex>
  )
}

export default App
