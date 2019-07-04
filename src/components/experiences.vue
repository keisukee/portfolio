<template>
  <div class="experience_container">
    <h2>Job Experiences</h2>
    <table>
      <thead>
        <tr>
          <th>2018/08 ~ 2019/03</th>
          <th>2019/06 ~ Now</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Favy</td>
          <td>Follop</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
</script>

<style lang="sass">
  @media (min-width: 769px)
    .experience_container
      width: 600px
      padding: 40px 0
      margin: 0 auto
      h2
        font-size: 30px
        font-weight: bold
        margin-bottom: 10px
      .description
        margin: 0 auto 20px
        p
          text-align: left
      table
        display: -webkit-flex
        display: -ms-flex
        display: flex
        padding: 30px 0 0 100px
        thead
          display: -webkit-flex
          display: -ms-flex
          display: flex
          -webkit-flex-direction: column
          -ms-flex-direction: column
          flex-direction: column
          margin-right: 20px
          tr
            display: -webkit-flex
            display: -ms-flex
            display: flex
            -webkit-flex-direction: column
            -ms-flex-direction: column
            flex-direction: column
            th
              font-size: 20px
              margin: 5px 0
        tbody
          display: -webkit-flex
          display: -ms-flex
          display: flex
          tr
            display: -webkit-flex
            display: -ms-flex
            display: flex
            -webkit-flex-direction: column
            -ms-flex-direction: column
            flex-direction: column
            td
              font-size: 20px
              font-weight: bold
              margin: 5px 0
  @media (max-width: 768px)
    .experience_container
      width: 320px
      padding: 20px 0
      margin: 0 auto
      h2
        font-size: 30px
        font-weight: bold
        margin-bottom: 10px
      .description
        margin: 0 auto 20px
        p
          text-align: left
      table
        display: -webkit-flex
        display: -ms-flex
        display: flex
        padding: 30px 0 0 20px
        thead
          display: -webkit-flex
          display: -ms-flex
          display: flex
          -webkit-flex-direction: column
          -ms-flex-direction: column
          flex-direction: column
          margin-right: 20px
          tr
            display: -webkit-flex
            display: -ms-flex
            display: flex
            -webkit-flex-direction: column
            -ms-flex-direction: column
            flex-direction: column
            th
              font-size: 20px
              margin: 5px 0
        tbody
          display: -webkit-flex
          display: -ms-flex
          display: flex
          tr
            display: -webkit-flex
            display: -ms-flex
            display: flex
            -webkit-flex-direction: column
            -ms-flex-direction: column
            flex-direction: column
            td
              font-size: 20px
              font-weight: bold
              margin: 5px 0
</style>
