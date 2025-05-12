import React from 'react';
import { View, StyleSheet } from 'react-native';
import StudentInfo from '/components/StudentInfo';
import Projects from '/components/Projects';

const ProfileScreen = () => {
    const user = {
        fullname: "Milot Elezaj",
        position: "IT",
        description: "Passionate about IT",
        projectImage:require('../assets/projekt.png'),
        profileImage: require('../assets/profile.png')
    };

    return (
        <View style={styles.container}>
        <StudentInfo
        fullname = {user.fullname}
        position = {user.position}
        description = {user.description}
        profileImage = {user.profileImage}
        />
        <Projects image={user.projectImage}/>
        
        </View>
    );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding:20,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'f0f0f0',
  },
  text: {
    fontSize: 20,
    fontWeight:'bold',
  }
});

export default ProfileScreen;