<template>
  <div class="wavesurfer">
    <el-row>
      <el-card class="box-card" style="text-align:left">
        <div slot="header" class="clearfix title">
          <span>Vue框架中嵌入使用wavesurfer.js插件</span>
        </div>
        <div id="waveform" ref="waveform">
          <!-- Here be the waveform -->
        </div>
        <div id="wave-timeline" ref="wave-timeline">
          <!--时间轴 -->
        </div>
        <div>
          <el-button type="primary" @click="playMusic">
            <i class="el-icon-video-play"></i>
            播放 /
            <i class="el-icon-video-pausee"></i>
            暂停
          </el-button>
        </div>
      </el-card>
    </el-row>
    <el-button @click="setI()">123</el-button>
  </div>
</template>

<script>
import WaveSurfer from 'wavesurfer.js';
import Timeline from 'wavesurfer.js/dist/plugin/wavesurfer.timeline.js';
import RegionsPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.js';
export default {
  name: 'WaveSurfer',
  data() {
    return {
      wavesurfer: null,
    };
  },
  components: {},
  computed: {},
  watch: {},
  methods: {
    playMusic() {
      //"播放/暂停"按钮的单击触发事件，暂停的话单击则播放，正在播放的话单击则暂停播放
      this.wavesurfer.playPause.bind(this.wavesurfer)();
    },
    setI() {
      // 禁用region
      this.wavesurfer.disableDragSelection();
    },
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.wavesurfer = WaveSurfer.create({
        container: this.$refs.waveform,
        waveColor: '#409EFF',
        progressColor: 'blue',
        backend: 'MediaElement',
        mediaControls: false,
        audioRate: '1',
        //使用时间轴插件
        plugins: [
          Timeline.create({
            container: '#wave-timeline',
          }),
          RegionsPlugin.create({
            regionsMinLength: 2,
            regions: [
              {
                start: 1,
                end: 3,
                loop: false,
                color: 'hsla(400, 100%, 30%, 0.5)',
              },
              {
                start: 5,
                end: 7,
                loop: false,
                color: 'hsla(200, 50%, 70%, 0.4)',
                minLength: 1,
              },
            ],
            dragSelection: {
              slop: 5,
            },
          }),
        ],
      });
      // 特别提醒：此处需要使用require(相对路径)，否则会报错
      this.wavesurfer.load(require('@/assets/media/demo.wav'));
      console.log(this.wavesurfer);
    });
  },
};
</script>

<style scoped lang='less'>
</style>