import { configureStore, createSlice } from '@reduxjs/toolkit'

//로그인 시 제공되는 유저정보 및 토큰
let userInfo = createSlice({
    name : 'userInfo',
    initialState : {
        "userId" : 10,
        "studentNum" : '202939522',
        "name" : "남궁다빈",
        "major" : "심리학과",
        "jwt" : 'sdfjaeiojfiopewjfpoiaewjiofjdsisdafhjiojiweoji',
        "lecture" : [
            {
                'lecId': '13',
                'lecName': '심리학개론',
                'professor': '교수331',
                'lecCode': '12-342343232',
                'star': '3.0',
            },
            {
                'lecId': '14',
                'lecName': '아무튼 심리학',
                'professor': '교수441',
                'lecCode': '12-3432324',
                'star': '3.0',
            },
        ]
    }
})

//추천강의
let recLectures = createSlice({
    name : 'recLectures',
    initialState : [
        {
            'lecId': '1',
            'lecName': '컴퓨터 프로그래밍 1',
            'professor': '교수1',
            'lecCode': '12-34',
            'star': '3.0',
        },
        {
            'lecId': '2',
            'lecName': '컴퓨터 프로그래밍 2',
            'professor': '교수2',
            'lecCode': '12-56',
            'star': '3.0',
        },
        {
            'lecId': '33',
            'lecName': '컴퓨터 프로그래밍 3',
            'professor': '교수3',
            'lecCode': '12-77',
            'star': '3.0',
        },
        
    ]
  })

  //검색강의
  let searchedLecture = createSlice({
    name : 'searchedLecture',
    initialState : []
  })

  

export default configureStore({
  reducer: { 
    userInfo : userInfo.reducer,
    recLectures : recLectures.reducer,
    searchedLecture : searchedLecture.reducer
  }
}) 