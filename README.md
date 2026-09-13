# track_muter_for_svstudio_v_pro
Synthesizer_V_pro 와 2 pro 사용자의 작곡을 조금더 수월하게 하기 위하여 개발된 스크립트 입니다.   
<br>
본 프로그램은 V 2 pro 버전 기준으로 개발되었습니다. V pro에서도 호환 및 사용은 가능하나, 문제 발생 시 지원이 어려운 점 양해 바랍니다.

### 주요기능
* 키를 지정 하여서 작업에 사용하지 않는 보이스나 방해되는 음원을 뮤트 할 수 있습니다.
* 기본 내장된 `이전 | 이후 트랙으로 이동 기능`과 함께 사용시 더욱 편리합니다.
</br>

### 목차
1. [스크립트 사용법](#스크립트-사용법)
2. [기본키와 사용](#기본키와-사용)
3. [작동 영상](#작동-영상)

- - -

### 스크립트 사용법 
<br>
&nbsp;&nbsp;&nbsp;&nbsp;1) 먼저 ToogleMuteTrack.js 를 <code>\AppData\Roaming\Dreamtonics\Synthesizer V Studio 2\scripts\Utilities</code> 에 넣어 주십시오.
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://github.com/peropero1111/track_muter_for_Synthesizer_V_pro/blob/main/img/2026-08-16%20222036.png?raw=true" width="650" height="650"/>  
<br>
<br>


&nbsp;&nbsp;&nbsp;&nbsp;주의) 트랙의 갯수가 2개 이상인 경우엔 <code>ToogleMuteTrack.js</code>를 복사한 뒤, 첫 줄의 
```javascript
var TARGET_TRACK_NUMBER = 1;
```
&nbsp;&nbsp;의 1을 각 트랙 번호(2, 3...)로 변경한 후 다른 이름으로 저장하십시오.
<br>
<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;2) Synthesizer_V를 켜신후에 상단의 <code>스크립트</code>, <code>다시 스캔</code>을 클릭 해 주십시오.
<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;이때 추가한 이름의 스크립트가 보여야 합니다.
<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://github.com/peropero1111/track_muter_for_Synthesizer_V_pro/blob/main/img/2026-08-16%20222117.png?raw=true" width="650" height="650"/>  
<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;3) 우측의 <code>설정</code> 을 클릭후 <code>단축키</code>에서 추가한 이름을 찾으신 후 단축어를 지정해 주십시오.
<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://github.com/peropero1111/track_muter_for_Synthesizer_V_pro/blob/main/img/2026-08-16%20222548.png?raw=true" width="650" height="650"/>  

- - -

### 기본키와 사용
<br>
&nbsp;&nbsp;&nbsp;&nbsp;1) <code>단축키</code>에 기본으로 설정되어 있는 <code>이전 | 이후 트랙으로 이동</code> 과 함께 사용하시면 더욱 편리합니다.
<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://github.com/peropero1111/track_muter_for_Synthesizer_V_pro/blob/main/img/2026-08-16%20203611.png?raw=true" width="650" height="650"/> 

- - -

### 작동 영상
<br>
&nbsp;&nbsp;&nbsp;&nbsp;아래는 기본 단축키와 스크립트를 사용한 작동영상입니다.
<br>
<br>


https://github.com/user-attachments/assets/8938e291-ba78-44de-98fd-5208b92050cd


