<template>
  <div>
    <h1>about me</h1>
    <div class="description">
      <p>大橋 啓介と申します。
        早稲田大学情報理工学部の学生をしており。<br>
        普段はRubyOnRailsを用いた開発や、サッカー、筋トレ、マンガ、海外ドラマなど様々な活動に打ち込んでいます。<br>
        浪人していた頃に多読にハマり、受験勉強をほっぽりだして洋書を読みふけったおかげで英語が得意に。海外ドラマや洋画にもハマる。TOEICは925点、TOEFL iBTは93点。<br>
        個人の活動としてエロサイトなどを開発。<br>
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
            <a href="https://github.com/keisukee">Github</a>
          </td>
          <td>
            <a href="https://twitter.com/sukebeeeeei">@sukebeeeeei</a>
          </td>
          <td>
            <a href="https://qiita.com/sukebeeeee">Qiita</a>
          </td>
          <td>kog71903[at]gmail.com</td>
          <td>
            <a href="https://www.wantedly.com/users/67034394">Wantedly</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
</script>

<style lang="sass">
  .description
    width: 600px
    margin: 0 auto
    p
      text-align: left
  table
    display: -webkit-flex
    display: -ms-flex
    display: flex
    thead
      display: -webkit-flex
      display: -ms-flex
      display: flex
      -webkit-flex-direction: column
      -ms-flex-direction: column
      flex-direction: column
      tr
        display: -webkit-flex
        display: -ms-flex
        display: flex
        -webkit-flex-direction: column
        -ms-flex-direction: column
        flex-direction: column
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
</style>
