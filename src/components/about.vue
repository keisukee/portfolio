<template>
  <div class="about_container">
    <h2>About me</h2>
    <div class="description">
      <p>大橋 啓介と申します。
        現在は早稲田大学情報理工学部の学生。<br>
        RubyOnRailsを用いた開発や、サッカー、筋トレ、マンガ、海外ドラマなど様々な活動に打ち込んでいます。<br>
        浪人していた頃に多読にハマり、受験勉強をほっぽりだして洋書を読みふけったおかげで英語が得意に。海外ドラマや洋画にもハマる。TOEICは925点、TOEFL iBTは93点。<br>
        個人の活動としてアダルトサイトなどを開発。<br>
      </p>
    </div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>University</th>
          <th>Birthday</th>
          <th>Github</th>
          <th>Twitter</th>
          <th>Qiita</th>
          <th>Mail</th>
          <th>Wantedly</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>大橋 啓介(Keisuke Ohashi)</td>
          <td>早稲田大学 基幹理工学部 情報工学科</td>
          <td>1998年9月17日</td>
          <td>
            <a href="https://github.com/keisukee" target="_blank">https://github.com/keisukee</a>
          </td>
          <td>
            <a href="https://twitter.com/sukebeeeeei" target="_blank">@sukebeeeeei</a>
          </td>
          <td>
            <a href="https://qiita.com/sukebeeeee" target="_blank">https://qiita.com/sukebeeeee</a>
          </td>
          <td>kog71903[at]gmail.com</td>
          <td>
            <a href="https://www.wantedly.com/users/67034394" target="_blank">Wantedly</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
</script>

<style lang="sass">
  @media (min-width: 769px)
    .about_container
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
        padding-top: 30px
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
              margin: 5px 0
  @media (max-width: 768px)
    .about_container
      width: 340px
      padding: 30px 0
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
        padding-top: 30px
        thead
          display: -webkit-flex
          display: -ms-flex
          display: flex
          -webkit-flex-direction: column
          -ms-flex-direction: column
          flex-direction: column
          margin-right: 15px
          tr
            display: -webkit-flex
            display: -ms-flex
            display: flex
            -webkit-flex-direction: column
            -ms-flex-direction: column
            flex-direction: column
            th
              font-size: 15px
              margin: 10px 0
        tbody
          display: -webkit-flex
          display: -ms-flex
          display: flex
          tr
            display: -webkit-flex
            display: -ms-flex
            display: flex
            align-items: stretch
            -webkit-flex-direction: column
            -ms-flex-direction: column
            flex-direction: column
            td
              font-size: 15px
              margin: 10px 0

</style>
