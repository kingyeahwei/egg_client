<template>
  <div>
    <van-uploader
      :max-count="1"
      v-model="fileList"
      :after-read="afterRead"
    ></van-uploader>
    <van-cell-group>
      <van-field label="文章标题" placeholder="文章标题" v-model="title"></van-field>
      <van-field label="文章简介" placeholder="文章简介" v-model="summary" autosize></van-field>
      <van-field label="文章内容" placeholder="文章内容" v-model="content" type="textarea"></van-field>
    </van-cell-group>
    <van-button @click="handleAdd" class="add-button" type="primary">提交</van-button>
  </div>
</template>

<script>
import {
  Uploader, CellGroup, Field, Button, Toast,
} from 'vant';

export default {
  name: 'Add',
  components: {
    [Uploader.name]: Uploader,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button,
  },
  data() {
    return {
      fileList: [],
      title: '',
      summary: '',
      content: '',
      img: '',
    };
  },
  methods: {
    afterRead(info) {
      this.img = info.content;
    },
    handleAdd() {
      const data = {
        title: this.title,
        summary: this.summary,
        content: this.content,
        img: this.img,
      };
      console.log(data);
      fetch('/article/create', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            Toast('文章发布成功');
            this.$router.push('/');
          } else {
            Toast(res.errMsg);
          }
        });
    },
  },
};
</script>

<style scoped>
.add-button {
  position: absolute;
  left: 0;
  bottom: 80px;
  width: 100%;
}
</style>
