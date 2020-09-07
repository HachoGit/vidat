import utils from '../../libs/utils.js'

export default {
  state: () => ({
    debug: false,
    video: {
      src: null,
      fps: 10,
    },
    keyframeList: [],
    leftCurrentFrame: 0,
    rightCurrentFrame: 50,
    cachedFrameList: [],
    mode: 'object', // 'object', 'region', 'skeleton'
    skeletonTypeId: 0,
    objectAnnotationListMap: {},
    regionAnnotationListMap: {},
    skeletonAnnotationListMap: {},
    actionAnnotationList: [],
    zoom: false,
    isSaved: true,
  }),
  getters: {},
  mutations: {
    setVideoSrc (state, value) {
      Vue.set(state.video, 'src', value)
      Vue.set(state, 'isSaved', true)
    },
    setVideoDuration (state, value) {
      Vue.set(state.video, 'duration', value)
      Vue.set(state.video, 'frames', Math.floor(state.video.fps * value))
    },
    setVideoWidth (state, value) {
      Vue.set(state.video, 'width', value)
    },
    setVideoHeight (state, value) {
      Vue.set(state.video, 'height', value)
    },
    setVideoFPS (state, value) {
      Vue.set(state.video, 'fps', value)
    },
    closeVideo (state) {
      Vue.set(state.video, 'src', null)
      Vue.set(state.video, 'duration', null)
      Vue.set(state.video, 'frames', null)
      Vue.set(state.video, 'width', null)
      Vue.set(state.video, 'height', null)
      Vue.set(state.video, 'frames', null)
      Vue.set(state, 'keyframeList', [])
      Vue.set(state, 'leftCurrentFrame', 0)
      Vue.set(state, 'rightCurrentFrame', state.video.fps * 5)
      Vue.set(state, 'cachedFrameList', [])
      Vue.set(state, 'skeletonTypeId', 0)
      Vue.set(state, 'objectAnnotationListMap', {})
      Vue.set(state, 'regionAnnotationListMap', {})
      Vue.set(state, 'skeletonAnnotationListMap', {})
      Vue.set(state, 'actionAnnotationList', [])
      Vue.set(state, 'isSaved', true)
    },
    setKeyframeList (state, value) {
      Vue.set(state, 'keyframeList', value)
    },
    setLeftCurrentFrame (state, value) {
      Vue.set(state, 'leftCurrentFrame', value)
      if (!state.cachedFrameList[value]) {
        document.getElementById('video').currentTime = utils.index2time(value)
      }
    },
    setRightCurrentFrame (state, value) {
      Vue.set(state, 'rightCurrentFrame', value)
      if (!state.cachedFrameList[value]) {
        document.getElementById('video').currentTime = utils.index2time(value)
      }
    },
    cacheFrame (state, value) {
      Vue.set(state.cachedFrameList, value['index'], value['frame'])
    },
    setCacheFrameList (state, value) {
      Vue.set(state.cachedFrameList, value)
    },
    setMode (state, value) {
      Vue.set(state, 'mode', value)
    },
    setSkeletonTypeId (state, value) {
      Vue.set(state, 'skeletonTypeId', value)
    },
    setObjectAnnotationListMap (state, value) {
      Vue.set(state, 'objectAnnotationListMap', value)
      Vue.set(state, 'isSaved', false)
    },
    setRegionAnnotationListMap (state, value) {
      Vue.set(state, 'regionAnnotationListMap', value)
      Vue.set(state, 'isSaved', false)
    },
    setSkeletonAnnotationListMap (state, value) {
      Vue.set(state, 'skeletonAnnotationListMap', value)
      Vue.set(state, 'isSaved', false)
    },
    setAnnotationList (state, value) {
      if (value.mode === 'object') {
        Vue.set(state.objectAnnotationListMap, value.index, value.annotationList)
      } else if (value.mode === 'region') {
        Vue.set(state.regionAnnotationListMap, value.index, value.annotationList)
      } else if (value.mode === 'skeleton') {
        Vue.set(state.skeletonAnnotationListMap, value.index, value.annotationList)
      } else {
        throw 'Unknown mode: ' + value.mode
      }
      Vue.set(state, 'isSaved', false)
    },
    setActionAnnotationList (state, value) {
      Vue.set(state, 'actionAnnotationList', value)
      Vue.set(state, 'isSaved', false)
    },
    setZoom (state, value) {
      Vue.set(state, 'zoom', value)
    },
    setIsSaved (state, value) {
      Vue.set(state, 'isSaved', value)
    },
  },
  actions: {},
}
