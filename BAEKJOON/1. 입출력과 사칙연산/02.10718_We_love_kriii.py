# 두 줄에 걸쳐 "강한친구 대한육군"을 한 줄에 한 번씩 출력한다.

import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')

print("강한친구 대한육군\n강한친구 대한육군")
