#include <stdio.h>
#include <math.h>
#include <stdlib.h>
void vypocetSplatky(float s, float u, int d, float *spl);
int main(){
	int d;
	float s, u;
	float spl;
	
	printf("Zadajte vysku pozicky, urok a dlzku splacania v mesiacoch: ");
	scanf("%f%f%d", &s, &u, &d);
	
	vypocetSplatky(s,  u,  d, *spl);
	
}

void vypocetSplatky(float s, float u, int d, float *spl){
	int m;
	u=(u/100)+1;
	
	m=d%2;
	if(m>0){
		m=(d/2)+1;
		u=pow(u, m);
	}
	else{
		m=d/2;
		u=pow(u, m);
	}
		printf("%f", u);

	
	
	
}
