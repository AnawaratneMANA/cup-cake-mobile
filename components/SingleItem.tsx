import React from 'react';
import { StyleSheet} from "react-native";
import {Text,Box, Card, Container, HStack, VStack, Image} from 'native-base';

interface CardProps {
    imageSource: string;
    title: string;
    description: string;
}

const CakeCard: React.FC<CardProps> = ({imageSource, title, description}) => {
   return (
      <Box style={styles.card} height={150} padding={0} margin="2">
          <HStack space={2} flex={2}>
              <VStack space={2} p={2} width="50%">
                  <Text numberOfLines={1} ellipsizeMode="tail" style={styles.cardTitle}> Chocolate Cupcake</Text>
                  <Text numberOfLines={5} ellipsizeMode="tail" style={styles.cardDescription}>{description}</Text>
              </VStack>
              <Image
                source={{ uri: imageSource }}
                alt="Cupcake Single Item"
                resizeMode="cover"
                flex={2}
                borderRightRadius={10}

              />
          </HStack>
      </Box>
   )
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    cardTitle: {
      fontWeight: "bold",
      fontSize: 18,
    },
    cardDescription: {
        fontSize:14,
    }
});

export default CakeCard;
