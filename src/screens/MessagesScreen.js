import { FlatList,  StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'
import colors from '../config/colors'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages = [
    {
    id : 1 ,
title : 'T1',
description : 'D1',
image : require('../assets/bebe.png')
},{
    id : 2 ,
    title : 'T2',
description : 'D2',
image : require('../assets/bebe.png')

},{
    id : 3 ,
    title : 'T3',
description : 'D3',
image : require('../assets/bebe.png')
}]
const MessagesScreen = () => {
   const [messages, setMessages] = useState(initialMessages);
   const [refreshing, setrefreshing] = useState(false);
   const handleDelete = message => {
setMessages(messages.filter(m => m.id !== message.id));
   }
  return (



    <Screen >

      <FlatList  data={messages} 
      keyExtractor={message => message.id.toString()}
      renderItem={({item}) => (
        
        <ListItem 
        title={item.title}
        subTitle={item.description}
        image={item.image}
        onPress={()=> console.log("Message Selected", item)}
        renderRightAction={()=>
        <ListItemDeleteAction onPress={()=> handleDelete(item)}/>}
        />
        )}
        ItemSeparatorComponent={<ListItemSeparator/>}
        refreshing={refreshing}
        onRefresh={()=> {
          setMessages([{id : 1 ,
            title : 'T1',
            description : 'D1',
            image : require('../assets/bebe.png')}])
        }}
        />
    </Screen>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({
  
})