import { Icon, Input, Pressable, Text, View } from "native-base";
import { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';

export default function Login() {
  const [show, setShow] = useState(false)

  return (
    <View backgroundColor='pink.400' h='full' w='full' flex='1' justifyContent='center' alignItems='center' paddingX={6}>
      <View w='full'>
        <Text fontSize='md' color='white' paddingBottom={1}>E-mail</Text>
        <Input
          placeholder="E-mail"
          mb={5}
          color="white"
          variant="outline"
          placeholderTextColor="white"
          selectionColor="white"
          cursorColor='white'
          _focus={{
            borderColor: "white",
            backgroundColor: "transparent",
          }}
        />

        <Text fontSize='md' color='white' paddingBottom={1}>Senha</Text>
        <Input
          placeholder="Senha"
          color='white'
          mb={5}
          variant="outline"
          placeholderTextColor="white"
          selectionColor="white"
          cursorColor='white'
          _focus={{
            borderColor: "white",
            backgroundColor: "transparent",
          }}
          type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon
              name="chevron-up"
              as={<MaterialIcons name={show ? 'visibility-off' : 'visibility'} />}
              size={5}
              mr="2"
              color="white"
            />
          </Pressable>} />
      </View>
    </View>
  )
}
