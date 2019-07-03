<template>
  <div>
    <h1>about me</h1>
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
