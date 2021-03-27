<template>
  <div>
    <input type="text" v-model="url">
    <ShareNetwork
        network="twitter"
        :url="url"
        :title="title"
        :description="description"
        :hashtags="hashtags"
        :twitterUser="twitterUser"
      >
      <i class="fab fah fa-lg fa-twitter"></i>
      <span>Share on Twitter</span>
    </ShareNetwork>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: 'http://onboarding.grey.software/',
      title: 'Welcome to the Grey Software Onboarding Process.',
      description: 'We are delighted to have you join our mission to empower people to create and use open-source software (OSS).',
      hashtags: 'greysoftware,opensouce,github,gitlab',
      twitterUser: 'grey_software'
    }
  }
}
</script>